'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import FloatingSphere from './FloatingSphere';

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#7c6aff" />
      <pointLight position={[5, 3, 2]} intensity={0.3} color="#a78bfa" />

      <Suspense fallback={null}>
        <ParticleField count={1800} />
        <FloatingSphere
          position={[2.5, 0, -1]}
          scale={2}
          speed={0.4}
          distort={0.5}
          color="#5a4fcf"
        />
        <FloatingSphere
          position={[-3, 1.5, -3]}
          scale={0.8}
          speed={0.7}
          distort={0.3}
          color="#a78bfa"
        />
        <FloatingSphere
          position={[0, -2.5, -4]}
          scale={0.5}
          speed={0.9}
          distort={0.6}
          color="#7c6aff"
        />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
