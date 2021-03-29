import React, { Suspense, useRef } from "react"

import styled from "styled-components"

import Header from "./Header"
import { Canvas, useLoader, useFrame } from "react-three-fiber"
import * as THREE from "three"
import { Section } from "./Section"
import { Html, useGLTF, PerspectiveCamera } from "@react-three/drei"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: #444;
`

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  )
}

const Model = () => {
  const gltf = useGLTF('/balls.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />
}

const HTMLContent = () => {
  const cam = useRef(null)
  useFrame((state) => {
    cam.current.position.z = 10 + Math.sin(state.clock.getElapsedTime() * 1.5) * 2
    cam.current.position.x = 0 + Math.sin(state.clock.getElapsedTime() * 1.5) * 2
    cam.current.position.y = 0 + Math.sin(state.clock.getElapsedTime() * 1.5) * 2
  })
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <PerspectiveCamera
          ref={cam}
          position={[0,0,0]}
        >
        <mesh 
          position={[0, -15, 10]}
          scale={[4, 4, 4]}
        >
          <Model />
        </mesh>
        </PerspectiveCamera>
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
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </Container>
  )
}

export default Application
