"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, OrbitControls } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import React from "react";
import type { Group } from "three";
import { PCFShadowMap } from "three";

type MetalValveCanvasProps = {
  mode?: "hero" | "exploded" | "scan";
  className?: string;
  interactive?: boolean;
};

function ValveCore({ exploded, scanning }: { exploded: boolean; scanning: boolean }) {
  const group = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y += 0.003;
    group.current.rotation.x = pointer.y * 0.08;
    group.current.rotation.z = pointer.x * 0.05;

    if (scanning) {
      const pulse = (Math.sin(clock.elapsedTime * 3) + 1) / 2;
      group.current.position.y = pulse * 0.06;
    }
  });

  const spread = exploded ? 0.38 : 0;
  const steelProps = useMemo(
    () => ({
      metalness: 0.92,
      roughness: 0.2,
      color: "#cad6e3",
    }),
    [],
  );

  return (
    <group ref={group}>
      <mesh position={[0, -0.95 - spread, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 1.8, 32]} />
        <meshStandardMaterial {...steelProps} />
      </mesh>

      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.44, 0.35, 0.56 + spread * 0.2, 32]} />
        <meshStandardMaterial color="#dbe7f4" metalness={0.94} roughness={0.18} />
      </mesh>

      <mesh position={[0, 0.68 + spread, 0]} castShadow>
        <cylinderGeometry args={[0.29, 0.44, 0.44, 32]} />
        <meshStandardMaterial color="#c8d4df" metalness={0.95} roughness={0.15} />
      </mesh>

      <mesh position={[0, 1.06 + spread * 1.34, 0]} castShadow>
        <sphereGeometry args={[0.22, 32, 24]} />
        <meshStandardMaterial color="#edf3f9" metalness={0.86} roughness={0.16} />
      </mesh>

      {scanning ? (
        <Html position={[0, 0.6, 0]} center>
          <div className="rounded-full edge-line bg-[#0f1d2e]/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-accent-soft">
            QC Scan Active
          </div>
        </Html>
      ) : null}
    </group>
  );
}

export function MetalValveCanvas({
  mode = "hero",
  className,
  interactive = false,
}: MetalValveCanvasProps) {
  const exploded = mode === "exploded";
  const scanning = mode === "scan";
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render canvas on client to avoid SSR infinite loop
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={className} style={{ background: "#0a0f18" }} />;

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas 
        shadows={{ type: PCFShadowMap }} 
        camera={{ position: [2.2, 1.6, 2.8], fov: 40 }}
        gl={{ preserveDrawingBuffer: false }}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={["#090f18"]} />
        <fog attach="fog" args={["#090f18", 4, 11]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[2.5, 3, 2.5]}
          intensity={2.2}
          color="#bfe6ff"
          castShadow
        />
        <pointLight position={[-2, 1, 1]} intensity={1.2} color="#6ea6ff" />
        <Float speed={1.6} floatIntensity={mode === "hero" ? 0.35 : 0.1}>
          <ValveCore exploded={exploded || (interactive && hovered)} scanning={scanning} />
        </Float>
        <Environment preset="city" />
        {interactive ? <OrbitControls enablePan={false} enableZoom={false} /> : null}
      </Canvas>
    </div>
  );
}
