import React from "react"

import styled from "styled-components"

import Header from "./Header"
import { Canvas } from "react-three-fiber"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #444;
`

const Application = () => {
  return (
    <Container>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
      </Canvas>
    </Container>
  )
}

export default Application
