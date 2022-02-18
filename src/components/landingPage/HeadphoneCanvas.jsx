import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Headphone from '../3d/Headphone'

const HeadphoneCanvas = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} color="#9b1b97" />
      <Suspense fallback={null} >
        <Headphone />
      </Suspense>
    </Canvas>
  )
}

export default HeadphoneCanvas;