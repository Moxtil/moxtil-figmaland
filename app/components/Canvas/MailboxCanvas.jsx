"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function MailboxCanvas() {
  const meshGroup = useRef();
  const flapGroupRef = useRef();
  const { pointer } = useThree();
  
  // State tracking interaction closure values
  const [isOpen, setIsOpen] = useState(false);

  useFrame(() => {
    if (!meshGroup.current) return;
    
    // Weighted mouse follow parallax logic
    const targetX = -pointer.y * 0.15; 
    const targetY = pointer.x * 0.25; 
    
    meshGroup.current.rotation.x = THREE.MathUtils.lerp(meshGroup.current.rotation.x, targetX, 0.05);
    meshGroup.current.rotation.y = THREE.MathUtils.lerp(meshGroup.current.rotation.y, targetY, 0.05);

    // Flap rotational loop tracking
    if (flapGroupRef.current) {
      // Positive value flips it FORWARD and UPWARDS toward the camera viewpoint
      const targetRotation = isOpen ? Math.PI - 0.3 : 0; 
      
      // Slightly lower lerp factor (0.07) makes the opening feel weighted and smooth
      flapGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        flapGroupRef.current.rotation.x,
        targetRotation,
        0.07
      );
    }
  });

  return (
    <group 
      ref={meshGroup} 
      position={[0, -0.1, 0]} 
      scale={1.35}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
      onPointerEnter={() => {
        if (typeof document !== "undefined") document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        if (typeof document !== "undefined") document.body.style.cursor = "default";
      }}
    >
      {/* Optimized Studio Lighting Matrix */}
      <ambientLight intensity={1.4} />
      <directionalLight position={[10, 15, 10]} intensity={2.5} castShadow />
      <pointLight position={[-5, 4, 3]} intensity={1.5} color="#c084fc" />
      <pointLight position={[5, -2, 3]} intensity={1.2} color="#22d3ee" />

      <Float speed={1.8} rotationIntensity={0.08} floatIntensity={0.25}>
        
        {/* Main Envelope Body Backing */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 1.4, 0.08]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.2} roughness={0.4} />
        </mesh>

        {/* Lower Front Pocket Flap Panel */}
        <mesh position={[0, -0.25, 0.05]}>
          <boxGeometry args={[2.22, 0.9, 0.02]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.2} />
        </mesh>

        {/* =========================================================
            FIXED FRONT HINGED FLAP SYSTEM (Pivots forward on top lip)
           ========================================================= */}
        <group position={[0, 0.45, 0.052]} ref={flapGroupRef}>
          {/* Shift mesh element downward relative to the hinge center coordinate */}
          <mesh position={[0, -0.25, 0]}>
            <boxGeometry args={[2.21, 0.5, 0.02]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.1} />
          </mesh>
        </group>

        {/* Interactive Notification Alert Element */}
        <mesh position={[0, -0.15, 0.065]}>
          <sphereGeometry args={[0.09, 32, 32]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
        
      </Float>
    </group>
  );
}