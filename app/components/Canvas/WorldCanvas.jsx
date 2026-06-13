"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function WorldCanvas() {
  const earthGroupRef = useRef();
  const cockpitRef = useRef();
  const { pointer } = useThree();

  // Load high-resolution planet texture buffers asynchronously
  const [earthTexture, bumpTexture, specularTexture] = useTexture([
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"
  ]);

  useFrame((state) => {
    // High-precision clock time used for constant, unbroken rotational loops
    const elapsedTime = state.clock.getElapsedTime();

    // =========================================================
    // 1. CONSTANT BACKGROUND ENVIRONMENT ORBIT (Earth & Atmosphere)
    // =========================================================
    if (earthGroupRef.current) {
      // Base continuous spin on Y axis
      const baseSpinY = elapsedTime * 0.05; 
      // Subtle mouse tracking balance offset
      const mouseParallaxX = -pointer.y * 0.08;
      const mouseParallaxY = pointer.x * 0.08;

      earthGroupRef.current.rotation.y = THREE.MathUtils.lerp(earthGroupRef.current.rotation.y, baseSpinY + mouseParallaxY, 0.05);
      earthGroupRef.current.rotation.x = THREE.MathUtils.lerp(earthGroupRef.current.rotation.x, mouseParallaxX, 0.05);
    }

    // =========================================================
    // 2. CONSTANT FOREGROUND OBSERVATION ORBIT (Spaceplane Cockpit)
    // =========================================================
    if (cockpitRef.current) {
      // Constant slow space float rotation coordinates
      const cockpitSlowRollX = Math.sin(elapsedTime * 0.15) * 0.05;
      const cockpitSlowYawY = elapsedTime * 0.02; // Slow continuous rotation around the universe axis

      // Mouse interactive look-around bounds matrix
      const targetMouseX = -pointer.y * 0.18;
      const targetMouseY = pointer.x * 0.25;

      // Blend the slow continuous rotation and the responsive mouse tracking together cleanly
      cockpitRef.current.rotation.x = THREE.MathUtils.lerp(
        cockpitRef.current.rotation.x, 
        cockpitSlowRollX + targetMouseX, 
        0.08
      );
      cockpitRef.current.rotation.y = THREE.MathUtils.lerp(
        cockpitRef.current.rotation.y, 
        cockpitSlowYawY + targetMouseY, 
        0.08
      );
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Cinematic Studio Space Lighting Layout */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[15, 10, 8]} intensity={3.5} castShadow />
      <pointLight position={[-5, 5, 3]} intensity={2.5} color="#22d3ee" /> {/* Cyan Atmospheric Horizon Wash */}
      <pointLight position={[5, -5, 1]} intensity={1.5} color="#7c3aed" /> {/* Internal Instrument Panel Wash */}

      {/* =========================================================
          BACKGROUND LAYER: DYNAMIC CONTINUOUS ROTATING EARTH
         ========================================================= */}
      <group ref={earthGroupRef} position={[0, 0, -1.8]} scale={1.35}>
        <mesh>
          <sphereGeometry args={[1.4, 64, 64]} />
          <meshStandardMaterial
            map={earthTexture}
            normalMap={bumpTexture}
            normalScale={new THREE.Vector2(0.35, 0.35)}
            roughnessMap={specularTexture}
            roughness={0.4}
            metalness={0.05}
          />
        </mesh>
        
        {/* Atmosphere Edge Flare */}
        <mesh>
          <sphereGeometry args={[1.42, 64, 64]} />
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

    </group>
  );
}