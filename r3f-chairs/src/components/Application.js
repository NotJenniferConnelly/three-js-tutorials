import React, { Suspense } from "react"

import styled from "styled-components"

import Header from "./Header"
import { Canvas } from "react-three-fiber"
import { Section } from "./Section"
import { Html, useGLTF } from "@react-three/drei"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: #444;
`

const Model = () => {
  const gltf = useGLTF('/armchairYellow.gltf', true)
  return (
    <primitive object={gltf.scene} dispose={null} />
  )
}

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[-5, 250, 0]}>
        <mesh>
          <Model />
        </mesh>
      </group>
    </Section>
  )
}

const Application = () => {
  return (
    <Container>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </Container>
  )
}

export default Application
