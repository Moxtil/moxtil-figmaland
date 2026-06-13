"use client";

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

/** =========================================================
    CORE 3D GEOMETRY LOOP (Running inside the Preload Matrix)
   ========================================================= */
const PreloadParticleGrid = () => {
  const pointsRef = useRef();

  // Procedurally generate a collection of linear analytical coordinate beams
  const pointPositions = useMemo(() => {
    const tempCoords = [];
    const count = 350; // High-integrity data point matrix density

    for (let i = 0; i < count; i++) {
      // Create random scattered beams within a specific radial bound
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2 + 0.5; // Constrained internal core tunnel
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.random() * -18; // Stretched deeply backward on the negative Z axis
      
      tempCoords.push(x, y, z);
    }
    return new Float32Array(tempCoords);
  }, []);

  // Hardware accelerated continuous motion simulation loop (Runs every frame)
  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Direct memory mutation for high-performance velocity loops
    const positions = pointsRef.current.geometry.attributes.position.array;
    const count = positions.length;

    // Fixed frame interval multiplier ensures uniform motion across 60Hz and 144Hz screens
    const velocity = 9.5 * delta;

    for (let i = 2; i < count; i += 3) {
      // Particles shoot forward along the Z axis at hyper-speed
      positions[i] += velocity;

      // If a particle zooms past the camera plane, instantly wrap it back to the far background
      if (positions[i] > 2) {
        positions[i] = -18;
      }
    }
    
    // Explicitly notify the GPU that the buffer coordinates have changed
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Subtle ambient orbital spin increases the tunnel warp illusion
    pointsRef.current.rotation.z += 0.08 * delta;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Dynamic Ambient Space Lighting Matrix */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <pointLight position={[-6, 4, 3]} intensity={1.8} color="#22d3ee" /> {/* Cyber Cyan Rim Light */}
      <pointLight position={[6, -3, 3]} intensity={1.4} color="#a855f7" /> {/* Deep Purple Base Light */}

      <Points ref={pointsRef} positions={pointPositions} stride={3}>
        <PointMaterial
          transparent
          color="#22d3ee" // Tuned to the Moxtil cyan identity palette
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

/** =========================================================
    MASTER LAYOUT STATE WRAPPER (Handling the Transition)
   ========================================================= */
export const PreLoadWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  // Synchronized state hook managing the hydration loop
  useEffect(() => {
    // Standard timer constraints, gives enough time for the 3D scene to render smoothly
    const timer = setTimeout(() => setShowSplash(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          className="fixed inset-0 bg-[#020617] z-50 flex items-center justify-center flex-col overflow-hidden"
          initial={{ opacity: 1, filter: "grayscale(0%)" }}
          // Cyan-to-Monochrome transition filter applied during exit animation sequence
          exit={{ opacity: 0, filter: "grayscale(100%)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* =========================================================
              3D SUPER-ATTRACTIVE MATRIX CANVASS LAYER
             ========================================================= */}
          <div className="absolute inset-0 z-0 [mask-image:_radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
              <Suspense fallback={null}>
                <PreloadParticleGrid />
              </Suspense>
            </Canvas>
          </div>

          {/* =========================================================
              FOREGROUND CONSOLE Badges & Text Details
             ========================================================= */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-12 select-none text-center px-6">
            <div className="space-y-4">
              {/* Micro Engineering Sub-Header (Figma coordinate theme) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="inline-flex self-center items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl text-xs font-mono font-bold tracking-widest text-purple-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                INSTANTIATING_NEURAL_PIPELINE
              </motion.div>

              {/* Heavy Linear Gradient Moxtil Title */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight"
              >
                Turn Figma Visions <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                  Into high-End Reality.
                </span>
              </motion.h1>
            </div> {/* <-- FIXED: Added unclosed text wrapper element container back here */}

            {/* Simulated Live Analytics Mini Sparkline Decoration (Vector style) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-full h-5 relative flex items-end gap-[3px] max-w-sm"
            >
              <div className="h-[20%] w-full bg-cyan-400/80 rounded-sm animate-loader" />
              <div className="h-[50%] w-full bg-cyan-400 rounded-sm animate-loader delay-75" />
              <div className="h-[35%] w-full bg-cyan-400/90 rounded-sm animate-loader delay-150" />
              <div className="h-[70%] w-full bg-purple-400 rounded-sm animate-loader delay-100" />
              <div className="h-[90%] w-full bg-purple-500 rounded-sm animate-loader delay-[200ms]" />
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 1.05, filter: "grayscale(100%) blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "grayscale(0%) blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full relative z-0"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};