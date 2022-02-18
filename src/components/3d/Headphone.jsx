import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Headphone({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/headphone.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <group position={[0, -224.64, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[88.73, 88.73, 88.73]}>
            <mesh geometry={nodes.Headphone_Part_Part_0.geometry} material={materials.Part} />
            <mesh geometry={nodes.Headphone_Part_Headphone_0.geometry} material={materials.Headphone} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/headphone.gltf")
