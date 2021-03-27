import React from "react"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10vh;
  background: #000;
  user-select: none;
`

const Title = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
`

const Header = () => {
  return (
    <Container>
      <Title>R3F Chairs</Title>
    </Container>
  )
}

export default Header
