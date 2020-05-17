import React from 'react'

import { Container, Image, Title, Header, Begin, Icon } from './styles'

import rocket from '../../assets/rocket.png'

const HomePage: React.FC = () => {
  
  return (
    <Container>
      <Header>
        <Image src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-black-and-white.png" alt="star-wars" />
        <Title>Quiz</Title>
      </Header>

      <Begin href="/game">
        <Icon src={rocket} alt="rocket"/>
        START
      </Begin>
    </Container>
  )
}

export default HomePage