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
      <Canvas>
      </Canvas>
    </Container>
  )
}

export default Application
