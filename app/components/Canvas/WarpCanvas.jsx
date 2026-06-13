"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function WarpCanvas() {
  const starsRef = useRef();

  // Procedurally generate a collection of linear tunnel coordinates stretching along the Z axis
  const starPositions = useMemo(() => {
    const tempCoords = [];
    const count = 600;

    for (let i = 0; i < count; i++) {
      // Create random scattered star beams shooting out around a hollow center tunnel
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 4 + 0.5; // Hollow tube radius constraint
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.random() * -20; // Stretched deeply backward on the negative Z axis
      
      tempCoords.push(x, y, z);
    }
    return new Float32Array(tempCoords);
  }, []);

  useFrame((state, delta) => {
    if (!starsRef.current) return;

    const positions = starsRef.current.geometry.attributes.position.array;
    const count = positions.length;

    // Loop through the array to fly the particles forward along the Z axis
    for (let i = 2; i < count; i += 3) {
      positions[i] += 12.0 * delta; // Speed coefficient of the hyper-drive velocity

      // If a star zooms past the camera plane, instantly wrap it back to the far background
      if (positions[i] > 2) {
        positions[i] = -20;
      }
    }
    
    starsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Smooth slow ambient spinning rotation to amplify the tunnel vortex warp illusion
    starsRef.current.rotation.z += 0.05 * delta;
  });

  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={1} />
      <Points ref={starsRef} positions={starPositions} stride={3}>
        <PointMaterial
          transparent
          color="#a855f7" // Purple neon star particles matching your master color scheme
          size={0.065}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}