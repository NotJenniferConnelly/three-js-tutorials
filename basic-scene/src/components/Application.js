import React, { useRef } from "react"

import styled from "styled-components"
import { Canvas, useFrame } from "react-three-fiber"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
`

const Cube = ({ position, color }) => {
  const mesh = useRef(null)
  useFrame(() => { mesh.current.rotation.x = mesh.current.rotation.y += 0.01 })

  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

const Sphere = ({ position, color }) => {
  const mesh = useRef(null)
  useFrame(() => { mesh.current.rotation.x = mesh.current.rotation.y += 0.01 })

  return (
    <mesh castShadow position={position} ref={mesh}>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )

}



const Application = () => {
  return (
    <Container>
      <Canvas 
        colorManagement 
        shadowMap
        camera={{ position: [-10, 2, 10], fov: 60 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.3} />
        <pointLight position={[0, -10, 0]} intensity={0.3} />

        {/* Plane */}
        <group>
          <mesh 
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]} 
            intensity={0.5}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.5} />
            <meshStandardMaterial attach="material" color="#000" />
          </mesh>
        </group>
      
        {/* Objects */}
        <Cube position={[0,1,0]} color="#f00" />
        <Cube position={[0,1,-2]} color="#0f0" />
        <Cube position={[0,1,2]} color="#00f" />
        <Sphere position={[3,1,2]} color="#000" />
      </Canvas>
    </Container>
  )
}

export default Application
