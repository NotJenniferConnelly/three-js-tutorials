import React, { useRef } from "react"

import styled from "styled-components"
import { Canvas, useFrame } from "react-three-fiber"
import { Box } from "@react-three/drei"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
`

const Boxed = ({ position, color }) => {
  const mesh = useRef(null)
  useFrame(() => { mesh.current.rotation.x = mesh.current.rotation.y += 0.01 })

  return (
    <mesh position={position} ref={mesh}>
      <Box>
        <meshStandardMaterial attach="material" color={color} />
      </Box>
    </mesh>
  )
}

const Application = () => {
  return (
    <Container>
      <Canvas colorManagement camera={{ position: [-10, 2, 10], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight
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
          <mesh rotation={[-Math.PI / 2, 0, 0]} intensity={0.5}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color="#000" />
          </mesh>
        </group>
      
        {/* Objects */}
        <Boxed position={[0,0,0]} color="#f00" />
        <Boxed position={[0,0,-2]} color="#0f0" />
        <Boxed position={[0,0,2]} color="#00f" />
      </Canvas>
    </Container>
  )
}

export default Application
