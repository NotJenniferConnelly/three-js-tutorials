import React, { useRef } from "react"

import styled from "styled-components"
import { Canvas, useFrame } from "react-three-fiber"
import { Box } from "@react-three/drei"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
`

const Boxed = () => {
  const mesh = useRef(null)
  useFrame(() => { mesh.current.rotation.x = mesh.current.rotation.y += 0.01 })

  return (
    <mesh ref={mesh}>
      <Box>
        <meshStandardMaterial attach="material"/>
      </Box>
    </mesh>
  )
}

const Application = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={0.2} />
        <Boxed />
      </Canvas>
    </Container>
  )
}

export default Application
