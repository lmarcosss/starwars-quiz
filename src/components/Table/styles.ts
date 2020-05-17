import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Card = styled.table`
  min-width: 700px; 
  min-height: 100px; 
  
  margin-top: 20px; 

  display: flex; 
  flex-direction: column; 

  background: #FFF; 
  border-radius: 6px; 
  box-shadow: -2px 1px 5px rgba(0, 0, 0, 0.8); 

  thead {
    margin: 20px 20px 0px;  

    tr {
      display: flex; 
      
      th {
        display: flex;
        flex-direction: column; 
        width: 120px; 
        margin: 0 20px; 

        p {
          padding-top: 40px; 
        }
      }

      td {
        padding: 10px 70px; 
      }
    }
  }

  tbody {
    display: flex;
    width: 100%;

    margin: 20px 0; 

    td {
      display: flex; 
      flex-direction: column; 
      justify-content: flex-start; 
      align-items: flex-start; 


      tr { 
        width: 120px;  
        
        background: black; 
        color: white; 

        &:nth-child(odd) {
          color: black; 
          background: white; 
        }

        text-align: start; 
        line-height: 50px; 
        padding: 0 80px; 

        font-weight: 500; 
      }

      &:first-child {
          margin-left: 20px; 
      }
    }
  }
`

export const Button = styled.button`
  width: 70px; 
  height: 70px; 
  margin-left: 20px; 
  
  border: none; 
  outline: none; 
  background: #E71D36; 
  border-radius: 50%; 
  box-shadow: -2px 1px 5px rgba(0, 0, 0, 0.4); 

  color: #fff;   
  font-family: 'Roboto'; 
  font-size: 14px; 
  font-weight: 700; 

  &:hover {
    background: ${shade(0.2, '#E71D36')};
  }
  
`
export const Icon = styled.img`
  width: 20px; 
  height: 20px; 

  margin-right: 10px; 

`
export const ContentUser = styled.div`
  display: flex; 
  align-items: center; 

  padding: 0 0 10px 0; 
`

export const TextInput = styled.input`
  border: 1px solid #B8BAC8; 
  border-radius: 5px; 
  background: #000; 
  text-align: center; 
  color: #EBDA1D; 

  height: 40px; 
  font-weight: 700; 
  font-size: 20px;   

  &:focus {
    border: 2px solid #EBDA1D; 
  }
`