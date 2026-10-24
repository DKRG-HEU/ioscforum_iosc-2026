
"use client";

import dynamic from "next/dynamic";

const OceanScene = dynamic(() => import("./OceanScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#031426]" />
  ),
});

export default function OceanSceneClient() {
  return (
    <div className="absolute inset-0">
      <OceanScene />
    </div>
  );
}
