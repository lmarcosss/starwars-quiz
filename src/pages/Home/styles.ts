import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 100%; 
  height: 100vh; 
  background: url('https://wallpaperboat.com/wp-content/uploads/2019/10/free-space-background-01.jpg') no-repeat; 


  display: flex; 
  flex-direction: column; 
  justify-content: space-around; 
  align-items: center; 
`

const rotate = keyframes`
  from {
    width: 0 
    height: 0 
  }


  to {
    width: 500px 
    height: 250px 
  }
` 

export const Header = styled.div`
  position: relative; 

  display: flex; 
  flex-direction: column; 
  align-items: center; 

  width: 550px; 
  height: 300px; 
`

export const Image = styled.img`
  width: 500px; 
  height: 250px; 
  animation: ${rotate} 2s linear; 

`

const animation = keyframes`
  from {
    right: -2000px 
  }

  to {
    right: 0 
  }
` 

export const Title = styled.p`
  animation: ${animation} 2s linear; 

  font-family: 'Pacifico', cursive; 
  font-size: 100px; 
  font-weight: 400; 
  color: white;

  position: absolute; 
  top: 190px; 
  right: 0px; 
`

const appear = keyframes`
  from {
    opacity: 0 
  }

  to {
    opacity: 1 
  }
` 

export const Begin = styled.a`
  animation: ${appear} 4s; 

  width: 200px; 
  height: 75px; 
  
  display: flex; 
  align-items: center; 
  padding: 0 20px; 

  border: none; 
  color: #000; 
  background: #EBDA1D; 
  text-decoration: none; 

  font-family: 'Roboto'; 
  font-weight: 700; 
  font-size: 22px; 

  border-radius: 8px; 
  outline: none; 
  cursor: pointer; 

  &:hover {
    background: ${shade(0.2, '#EBDA1D')};
  }
`

export const Icon = styled.img`
  width: 25px; 
  height: 25px; 
  transform: rotate(45deg);
  margin-right: 30px;
`
