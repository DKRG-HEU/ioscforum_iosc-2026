
"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three/addons/objects/Water.js";

/* ------------------------------------------
   PROCEDURAL WATER NORMAL TEXTURE
   No external image required.
------------------------------------------- */

function createWaterNormals() {
  const size = 128;
  const data = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = (x / size) * Math.PI * 2;
      const v = (y / size) * Math.PI * 2;

      const nx =
        Math.sin(u * 3 + Math.sin(v * 2)) * 0.25 +
        Math.sin(v * 5 + u) * 0.12;

      const ny =
        Math.cos(v * 4 + Math.sin(u * 2)) * 0.25 +
        Math.cos(u * 6 - v) * 0.12;

      const length = Math.sqrt(nx * nx + ny * ny + 1);

      const i = (y * size + x) * 4;

      data[i] = Math.round((nx / length * 0.5 + 0.5) * 255);
      data[i + 1] = Math.round((ny / length * 0.5 + 0.5) * 255);
      data[i + 2] = Math.round((1 / length * 0.5 + 0.5) * 255);
      data[i + 3] = 255;
    }
  }

  const texture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat
  );

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;

  return texture;
}

/* ------------------------------------------
   REALISTIC REFLECTIVE OCEAN
------------------------------------------- */


function OceanWater() {
  const water = useMemo(() => {
    const normals = createWaterNormals();

    const instance = new Water(
      new THREE.PlaneGeometry(180, 100),
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: normals,
        sunDirection: new THREE.Vector3(-0.4, 0.8, 0.3).normalize(),
        sunColor: 0xffffff,
        waterColor: 0x07516d,
        distortionScale: 3.2,
        size: 1,
        alpha: 0.62,
        fog: false,
      }
    );

    instance.rotation.x = -Math.PI / 2;
    instance.position.set(0, 0, 0);

    return instance;
  }, []);

  useFrame((_, delta) => {
    const time = water.material.uniforms?.time;

    if (time) {
      time.value += Math.min(delta, 0.04);
    }
  });

  useEffect(() => {
    return () => {
      water.geometry.dispose();

      const normalTexture =
        water.material.uniforms?.normalSampler?.value;

      if (normalTexture?.dispose) {
        normalTexture.dispose();
      }

      water.material.dispose();
    };
  }, [water]);

  return <primitive object={water} />;
}


/* ------------------------------------------
   ATMOSPHERE AND UNDERWATER PARTICLES
------------------------------------------- */

function OceanParticles() {
  const pointsRef = useRef(null);
  const count = 700;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      values[i * 3] = (Math.random() - 0.5) * 22;
      values[i * 3 + 1] = -0.2 - Math.random() * 5;
      values[i * 3 + 2] = -2 + Math.random() * 12;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    const position = pointsRef.current.geometry.attributes.position;
    const values = position.array;

    for (let i = 0; i < count; i++) {
      values[i * 3 + 1] += delta * (0.035 + (i % 5) * 0.008);

      if (values[i * 3 + 1] > 0.1) {
        values[i * 3 + 1] = -5.2;
      }
    }

    position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#8deaff"
        size={0.025}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------------------
   OCEANOGRAPHIC RESEARCH VESSEL
------------------------------------------- */

function ResearchVessel() {
  const shipRef = useRef(null);

  useFrame(({ clock }) => {
    if (!shipRef.current) return;

    const t = clock.getElapsedTime();

    shipRef.current.position.y = 0.13 + Math.sin(t * 0.8) * 0.035;
    shipRef.current.rotation.z = Math.sin(t * 0.55) * 0.012;
  });

  return (
    <group
      ref={shipRef}
      position={[2.4, 0.13, -7]}
      rotation={[0, -0.12, 0]}
      scale={0.88}
    >
      {/* Hull */}
      <mesh position={[0, -0.13, 0]} scale={[1.9, 0.25, 0.48]}>
        <sphereGeometry args={[1, 48, 24]} />
        <meshStandardMaterial
          color="#102f45"
          metalness={0.45}
          roughness={0.27}
        />
      </mesh>

      {/* White upper hull */}
      <mesh position={[-0.05, 0.02, 0]} scale={[1.6, 0.13, 0.43]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#e9f0f2" roughness={0.36} />
      </mesh>

      {/* Main deck */}
      <mesh position={[-0.25, 0.22, 0]}>
        <boxGeometry args={[1.05, 0.27, 0.37]} />
        <meshStandardMaterial color="#f5f7f6" roughness={0.42} />
      </mesh>

      {/* Bridge */}
      <mesh position={[-0.42, 0.48, 0]}>
        <boxGeometry args={[0.58, 0.27, 0.33]} />
        <meshStandardMaterial color="#dbe7eb" roughness={0.3} />
      </mesh>

      {/* Bridge windows */}
      {[-0.62, -0.47, -0.32, -0.17].map((x) => (
        <mesh key={x} position={[x, 0.5, 0.17]}>
          <boxGeometry args={[0.1, 0.12, 0.012]} />
          <meshStandardMaterial
            color="#082b42"
            metalness={0.25}
            roughness={0.2}
            emissive="#07516d"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Upper cabin */}
      <mesh position={[-0.45, 0.7, 0]}>
        <boxGeometry args={[0.37, 0.17, 0.26]} />
        <meshStandardMaterial color="#f2f5f5" />
      </mesh>

      {/* Mast */}
      <mesh position={[-0.42, 0.92, 0]}>
        <cylinderGeometry args={[0.012, 0.018, 0.28, 8]} />
        <meshStandardMaterial color="#b9cbd4" metalness={0.8} />
      </mesh>

      {/* Research crane */}
      <mesh position={[0.95, 0.36, 0]}>
        <boxGeometry args={[0.06, 0.72, 0.06]} />
        <meshStandardMaterial color="#849eab" metalness={0.7} />
      </mesh>

      <mesh
        position={[0.78, 0.68, 0]}
        rotation={[0, 0, -0.55]}
      >
        <boxGeometry args={[0.55, 0.045, 0.045]} />
        <meshStandardMaterial color="#b4c9d2" metalness={0.65} />
      </mesh>

      {/* Navigation light */}
      <mesh position={[-0.42, 1.08, 0]}>
        <sphereGeometry args={[0.028, 12, 12]} />
        <meshBasicMaterial color="#70efff" />
      </mesh>

      <pointLight
        position={[-0.42, 1.08, 0.1]}
        color="#4de7ff"
        intensity={1.5}
        distance={2.5}
      />
    </group>
  );
}

/* ------------------------------------------
   AUTONOMOUS UNDERWATER VEHICLE
------------------------------------------- */

function AUV() {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();

    ref.current.position.x = 0.4 + Math.sin(t * 0.27) * 0.65;
    ref.current.position.y = -1.15 + Math.sin(t * 0.75) * 0.07;
    ref.current.rotation.z = Math.sin(t * 0.4) * 0.025;
  });

  return (
    <group ref={ref} position={[0.4, -1.15, 1]} scale={1.05}>
      {/* Main pressure hull */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 1.55, 40]} />
        <meshStandardMaterial
          color="#ffc928"
          metalness={0.35}
          roughness={0.28}
          emissive="#4a3000"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Front nose */}
      <mesh position={[-0.79, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 24]} />
        <meshStandardMaterial color="#ffe078" metalness={0.4} />
      </mesh>

      {/* Rear section */}
      <mesh position={[0.79, 0, 0]}>
        <sphereGeometry args={[0.16, 24, 20]} />
        <meshStandardMaterial color="#a9c4d0" metalness={0.75} />
      </mesh>

      {/* Forward sonar */}
      <mesh position={[-0.96, 0, 0]}>
        <sphereGeometry args={[0.07, 20, 16]} />
        <meshBasicMaterial color="#7af5ff" />
      </mesh>

      {/* Four stabilizer fins */}
      {[
        [0.45, 0.24, 0],
        [0.45, -0.24, 0],
        [0.45, 0, 0.22],
        [0.45, 0, -0.22],
      ].map((p, i) => (
        <mesh
          key={i}
          position={p}
          rotation={[0, i > 1 ? Math.PI / 2 : 0, 0]}
        >
          <boxGeometry args={[0.3, 0.06, 0.17]} />
          <meshStandardMaterial color="#c6dce5" metalness={0.55} />
        </mesh>
      ))}

      {/* Rear propeller hub */}
      <mesh position={[0.94, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.12, 16]} />
        <meshStandardMaterial color="#d4e7ed" metalness={0.85} />
      </mesh>

      {/* Glowing equipment strip */}
      <mesh position={[0, 0.205, 0]}>
        <boxGeometry args={[0.38, 0.035, 0.1]} />
        <meshStandardMaterial
          color="#102c3c"
          emissive="#00d9ff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Forward inspection light */}
      <pointLight
        position={[-0.8, 0, 0.1]}
        color="#4beaff"
        intensity={3}
        distance={5}
      />
    </group>
  );
}


/* ------------------------------------------
   SONAR SIGNALS
------------------------------------------- */

function SonarRings() {
  const rings = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    rings.current.forEach((ring, i) => {
      if (!ring) return;

      const phase = ((t * 0.42 + i / 3) % 1);
      const scale = 0.2 + phase * 1.6;

      ring.scale.set(scale, scale * 0.45, 1);
      ring.material.opacity = (1 - phase) * 0.48;
    });
  });

  return (
    <group position={[0.4, -1.15, 0.75]}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            rings.current[i] = el;
          }}
          rotation={[0, 0, 0]}
        >
          <ringGeometry args={[0.75, 0.79, 64]} />
          <meshBasicMaterial
            color="#41e8ff"
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------
   SEABED AND SENSOR NODES
------------------------------------------- */


function Seabed() {
  const positions = [-4.2, -2.5, -0.5, 1.8, 4.2];

  return (
    <group position={[0, -3.05, 0]}>
      {/* Ocean floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, -1]}
      >
        <planeGeometry args={[24, 18, 32, 32]} />
        <meshStandardMaterial
          color="#092c3c"
          roughness={1}
          metalness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {positions.map((x, i) => (
        <group key={x} position={[x, 0.16, 0.3]} scale={1.25}>
          {/* Sensor base */}
          <mesh>
            <cylinderGeometry args={[0.09, 0.13, 0.3, 16]} />
            <meshStandardMaterial
              color="#72909d"
              metalness={0.55}
              roughness={0.4}
            />
          </mesh>

          {/* Bright cyan sensor */}
          <mesh position={[0, 0.19, 0]}>
            <sphereGeometry args={[0.075, 20, 16]} />
            <meshStandardMaterial
              color="#42efff"
              emissive="#00dfff"
              emissiveIntensity={2.5}
            />
          </mesh>

          {/* Antenna */}
          <mesh position={[0, 0.36, 0]}>
            <cylinderGeometry args={[0.012, 0.012, 0.22, 8]} />
            <meshStandardMaterial
              color="#9be9f5"
              metalness={0.5}
            />
          </mesh>

          {/* Signal ring */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.145, 0]}
          >
            <ringGeometry args={[0.15, 0.19, 32]} />
            <meshBasicMaterial
              color="#20e5ff"
              side={THREE.DoubleSide}
              transparent
              opacity={0.9}
              depthWrite={false}
            />
          </mesh>

          <pointLight
            position={[0, 0.2, 0]}
            color="#19cfff"
            intensity={0.8}
            distance={2}
          />
        </group>
      ))}
    </group>
  );
}


/* ------------------------------------------
   DISTANT MARINE LIFE
------------------------------------------- */

function Fish({ position, scale = 1, speed = 1 }) {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime() * speed;

    ref.current.position.x = position[0] + Math.sin(t * 0.35) * 0.65;
    ref.current.position.y = position[1] + Math.sin(t) * 0.06;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.25, 20, 14]} />
        <meshStandardMaterial
          color="#5da8b9"
          roughness={0.5}
          metalness={0.15}
        />
      </mesh>

      <mesh position={[0.3, 0, 0]}>
        <coneGeometry args={[0.15, 0.3, 3]} />
        <meshStandardMaterial color="#8dd8e3" />
      </mesh>

      <mesh position={[-0.13, 0.04, 0.19]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#e4fbff" />
      </mesh>
    </group>
  );
}

/* ------------------------------------------
   SCENE
------------------------------------------- */

function SceneContents() {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.1;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);

  return (
    <>
      <color attach="background" args={["#071d31"]} />

      <fog attach="fog" args={["#082b43", 8, 24]} />

      <ambientLight intensity={0.65} color="#a3d8ed" />

      <hemisphereLight
        args={["#80dfff", "#061521", 1.1]}
      />

      <directionalLight
        position={[-4, 8, 5]}
        intensity={2.1}
        color="#d3f3ff"
      />

      <directionalLight
        position={[4, 2, -6]}
        intensity={1.1}
        color="#13a8d5"
      />

      {/* Reflective animated water surface */}
      <OceanWater />

      {/* Main research vessel */}
      <ResearchVessel />

      {/* Underwater vehicle and sonar */}
      <AUV />
      <SonarRings />

      {/* Ocean floor and sensing network */}
      <Seabed />

      {/* Underwater particles */}
      <OceanParticles />

      {/* Distant marine life */}
      <Fish position={[-3.2, -0.6, -1.2]} scale={0.35} speed={0.8} />
     <Fish position={[-4.1, -1.45, -0.6]} scale={0.23} speed={1.1} />
     <Fish position={[3.8, -0.85, -1.7]} scale={0.3} speed={0.7} />
    </>
  );
}

export default function OceanScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{
          position: [0, 2.1, 10],
          fov: 43,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        fallback={
          <div className="absolute inset-0 bg-[#031426]" />
        }
      >
        <SceneContents />
      </Canvas>
    </div>
  );
}
