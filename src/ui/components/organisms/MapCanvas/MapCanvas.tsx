"use client";

import { Canvas } from '@react-three/fiber';

export const MapCanvas = () => {
    const mapSize = 128;

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    );
};