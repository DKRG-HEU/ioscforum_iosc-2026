
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=700&q=85",
];

function GalleryCards({ pointerRef }) {
  const textures = useTexture(IMAGES);
  const meshes = useRef([]);
  const cards = useRef(
    IMAGES.map(() => ({
      age: 10,
      targetX: 0,
      targetY: 0,
      rotation: 0,
    }))
  );
  const lastTrigger = useRef(0);
  const nextCard = useRef(0);

  useFrame((state, delta) => {
    const pointer = pointerRef.current;

    // Spawn a new image when the pointer moves far enough.
    if (pointer.trigger !== lastTrigger.current) {
      lastTrigger.current = pointer.trigger;

      const index = nextCard.current % IMAGES.length;
      nextCard.current += 1;

      const mesh = meshes.current[index];
      const card = cards.current[index];

      if (mesh) {
        mesh.visible = true;
        mesh.position.set(pointer.x, pointer.y, 0);
        mesh.scale.setScalar(0.01);

        card.age = 0;
        card.targetX = pointer.x + (Math.random() - 0.5) * 1.1;
        card.targetY = pointer.y + 0.35 + Math.random() * 0.45;
        card.rotation = (Math.random() - 0.5) * 0.16;
      }
    }

    // Animate all floating images.
    meshes.current.forEach((mesh, index) => {
      if (!mesh) return;

      const card = cards.current[index];

      if (card.age >= 1.25) {
        mesh.visible = false;
        return;
      }

      card.age += delta;

      const progress = Math.min(card.age / 1.25, 1);
      const fade = Math.min(
        card.age / 0.12,
        1,
        (1 - progress) / 0.25
      );

      mesh.visible = true;
      mesh.position.x +=
        (card.targetX - mesh.position.x) *
        (1 - Math.exp(-delta * 5));

      mesh.position.y +=
        (card.targetY - mesh.position.y) *
        (1 - Math.exp(-delta * 5));

      mesh.rotation.z +=
        (card.rotation - mesh.rotation.z) *
        (1 - Math.exp(-delta * 5));

      const scale = Math.sin(Math.min(card.age / 0.22, 1) * Math.PI / 2);
      const shrink = 1 - progress * 0.15;

      mesh.scale.set(
        1.45 * scale * shrink,
        0.95 * scale * shrink,
        1
      );

      mesh.material.opacity = Math.max(0, fade);
    });
  });

  return (
    <>
      {textures.map((texture, index) => (
        <mesh
          key={IMAGES[index]}
          ref={(element) => {
            meshes.current[index] = element;
          }}
          visible={false}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
}

export default function FloatingGallery({ pointerRef }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 30 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <GalleryCards pointerRef={pointerRef} />
      </Canvas>
    </div>
  );
}
