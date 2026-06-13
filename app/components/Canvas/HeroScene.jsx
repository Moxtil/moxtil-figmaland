import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const containerRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    if (!containerRef.current) return;
    const targetX = -pointer.y * 0.22;
    const targetY = pointer.x * 0.32;
    
    containerRef.current.rotation.x = THREE.MathUtils.lerp(containerRef.current.rotation.x, targetX, 0.08);
    containerRef.current.rotation.y = THREE.MathUtils.lerp(containerRef.current.rotation.y, targetY, 0.08);
  });

  return (
    <group ref={containerRef}>
      {/* Studio Lights */}
      <ambientLight intensity={1.3} />
      <directionalLight position={[10, 12, 8]} intensity={2.2} castShadow />
      <pointLight position={[-4, 3, 2]} intensity={1.5} color="#c084fc" />
      <pointLight position={[4, -3, 2]} intensity={1.2} color="#22d3ee" />

      <Float speed={1.6} rotationIntensity={0.08} floatIntensity={0.25}>
        
        {/* =========================================================
            FOREGROUND - PANEL 1: MAIN MOCKUP (280x180)
           ========================================================= */}
        <Html
          transform
          occlude
          distanceFactor={3.4}
          position={[0.2, -0.15, 0.5]} // Shifted forward (+0.5 Z)
          rotation={[0, -0.06, 0]}
        >
          <div className="relative w-[280px] h-[180px] rounded-[18px] bg-gradient-to-br from-white/12 to-white/[0.02] 
                          backdrop-blur-3xl border border-white/30 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.8)] p-4 flex flex-col justify-between select-none">
            
            <div className="absolute top-0 left-0 w-2 h-2 border border-cyan-400 bg-white -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-2 h-2 border border-cyan-400 bg-white translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border border-cyan-400 bg-white -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border border-cyan-400 bg-white translate-x-1/2 translate-y-1/2" />

            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded border border-white/10">Auto Layout</span>
            </div>

            <div className="space-y-1.5 my-auto">
              <div className="h-3 w-2/3 bg-white/20 rounded-md" />
              <div className="h-2 w-full bg-white/10 rounded-md" />
              <div className="h-2 w-4/5 bg-white/10 rounded-md" />
            </div>

            <div className="h-7 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-[9px] font-semibold text-white shadow-lg shadow-purple-500/30">
              Interactive Component
            </div>

            <div className="absolute bottom-10 right-8 flex flex-col items-start pointer-events-none">
              <svg width="10" height="14" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 drop-shadow-md">
                <path d="M0 0V18.5L4.5 14L8.5 18L13.5 13L9.5 9L14 4.5H0Z" fill="currentColor"/>
              </svg>
              <div className="bg-cyan-400 text-[7px] font-bold text-slate-900 px-1.5 py-0.5 rounded-md rounded-tl-none shadow-md">
                Developer.exe
              </div>
            </div>
          </div>
        </Html>

        {/* =========================================================
            BACKGROUND - PANEL 2: VARIANT SELECTION (Left side)
           ========================================================= */}
        <Html
          transform
          occlude
          distanceFactor={3.4}
          position={[-1.0, -0.3, -0.2]} // Placed deeper back (-0.2 Z)
          rotation={[0, 0.15, 0]}
        >
          <div className="w-[170px] h-[105px] rounded-[14px] bg-white/[0.04] 
                          backdrop-blur-2xl border border-white/10 shadow-xl p-3 flex flex-col justify-between select-none">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-md bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[8px] text-purple-300 font-bold">❖</div>
              <div className="space-y-1 w-1/2">
                <div className="h-1.5 w-full bg-white/20 rounded" />
                <div className="h-1 w-2/3 bg-white/10 rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center bg-black/30 p-1.5 rounded-md border border-white/5">
              <span className="text-[8px] text-slate-300">Variant</span>
              <span className="text-[8px] text-purple-300 font-mono font-bold">True</span>
            </div>
          </div>
        </Html>

        {/* =========================================================
            BACKGROUND - PANEL 3: CODE FRAME (Top Center)
           ========================================================= */}
        <Html
          transform
          occlude
          distanceFactor={3.4}
          position={[-0.2, 0.55, -0.4]} // Layered further back (-0.4 Z) and high up
          rotation={[0, 0.02, -0.02]}
        >
          <div className="w-[170px] h-[95px] rounded-[12px] bg-slate-950/50 
                          backdrop-blur-xl border border-white/5 shadow-lg p-3 flex flex-col gap-1.5 select-none">
            <div className="flex items-center gap-1.5 opacity-40">
              <span className="text-[8px] font-mono text-cyan-400">{"< />"}</span>
              <span className="text-[7px] font-mono tracking-wide text-slate-400">motion.div</span>
            </div>
            <div className="space-y-1 mt-0.5">
              <div className="h-1 w-full bg-cyan-500/20 rounded animate-pulse" />
              <div className="h-1 w-4/5 bg-white/5 rounded" />
              <div className="h-1 w-5/6 bg-white/5 rounded" />
            </div>
          </div>
        </Html>

        {/* =========================================================
            BACKGROUND - PANEL 4: NEW CANVAS INFOBAR (Right side)
           ========================================================= */}
        <Html
          transform
          occlude
          distanceFactor={3.4}
          position={[1.1, 0.3, -0.3]} // Balanced on the right background layer (-0.3 Z)
          rotation={[0, -0.12, 0]}
        >
          <div className="w-[160px] h-[85px] rounded-[12px] bg-white/[0.02] 
                          backdrop-blur-2xl border border-white/10 shadow-lg p-3 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between opacity-60">
              <span className="text-[7px] text-slate-400 uppercase tracking-wider font-bold">Properties</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[8px] text-slate-300">
                <span>W: 280px</span>
                <span>H: 180px</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>
            </div>
          </div>
        </Html>

      </Float>
    </group>
  );
}