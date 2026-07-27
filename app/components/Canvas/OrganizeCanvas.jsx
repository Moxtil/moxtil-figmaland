"use client";

import { useRef, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Html, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

export default function OrganizeCanvas() {
  const meshGroup = useRef();
  const { pointer } = useThree();

  // Loads the model seamlessly from the public/models directory
  const { scene } = useGLTF("/models/mac.glb");

  useFrame(() => {
    if (!meshGroup.current) return;
    const targetX = -pointer.y * 0.10;
    const targetY = pointer.x * 0.15;
    meshGroup.current.rotation.x = THREE.MathUtils.lerp(meshGroup.current.rotation.x, targetX, 0.05);
    meshGroup.current.rotation.y = THREE.MathUtils.lerp(meshGroup.current.rotation.y, targetY, 0.05);
  });

  return (
    <group ref={meshGroup}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      <Suspense fallback={null}>
        <Center>
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            
            {/* The base 3D Model file */}
            <primitive object={scene} scale={1.2} />

            {/* =========================================================
                TUNED CANVAS INJECTION (Positioned inside the screen bezel)
               ========================================================= */}
           <Html
  transform
  occlude
  distanceFactor={1.12}       // Optimized scaling multiplier for 720x470 resolutions
  position={[0.09, 0.90, -0.50]} // X: Centered right, Y: Lowered inside bezel, Z: Kept tight to lid
  rotation={[-0.14, 0, 0]}     // Slanted backward perfectly parallel to match lid pitch angle
>
              {/* Ultra-Premium Figma-Style Dashboard Screen */}
              <div className="w-[720px] h-[470px] bg-[#090d23] border border-cyan-500/30 rounded-sm p-4 flex flex-col justify-between select-none shadow-[inset_0_0_30px_rgba(6,182,212,0.2)]">
                
                {/* Window Control Chrome bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[7px] font-mono tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                    WORKSPACE_DASHBOARD.EXE
                  </span>
                </div>

                {/* Main analytical UI display grids */}
                <div className="grid grid-cols-3 gap-2.5 my-auto">
                  <div className="col-span-2 space-y-2 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div className="h-2.5 w-2/3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
                    <div className="h-1.5 w-full bg-white/10 rounded" />
                    <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                    <div className="h-1.5 w-4/5 bg-white/5 rounded" />
                  </div>
                  
                  <div className="col-span-1 p-2 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg flex flex-col justify-between items-center text-center">
                    <span className="text-[6px] font-mono text-purple-300 uppercase tracking-wider">Sync Integrity</span>
                    <div className="relative flex items-center justify-center my-1">
                      <span className="absolute w-4 h-4 rounded-full bg-cyan-400/30 animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-white">99.8%</span>
                  </div>
                </div>

                {/* Connected active state validation footer */}
                <div className="flex justify-between items-center pt-2 border-t border-white/5 text-[7px] font-mono text-slate-500">
                  <span>RE-FLOW: ACTIVE</span>
                  <span className="text-cyan-400 animate-pulse">● PIPELINE CONNECTED</span>
                </div>
              </div>
            </Html>
            
          </Float>
        </Center>
      </Suspense>
    </group>
  );
}


useGLTF.preload("/models/mac.glb");