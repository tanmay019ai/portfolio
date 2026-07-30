'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingSphereProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
  distort?: number;
  color?: string;
}

export default function FloatingSphere({
  position = [0, 0, 0],
  scale = 1.5,
  speed = 0.5,
  distort = 0.4,
  color = '#7c6aff',
}: FloatingSphereProps) {
  const ref = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;

    // Float animation
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.3;
    ref.current.rotation.x = t * 0.1;
    ref.current.rotation.z = t * 0.08;

    // Mouse parallax
    ref.current.position.x = position[0] + mouse.x * 0.4;
    ref.current.position.y += mouse.y * 0.2;
  });

  return (
    <Sphere ref={ref} args={[1, 128, 128]} scale={scale} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed * 2}
        roughness={0}
        metalness={0.1}
        transparent
        opacity={0.85}
        envMapIntensity={1}
      />
    </Sphere>
  );
}
