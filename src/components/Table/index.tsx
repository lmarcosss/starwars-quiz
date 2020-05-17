import React, { useState } from 'react'
import avatar from '../../assets/avatar.png'

import {
  Container,
  Button,
  Icon,
  ContentUser,
  TextInput,
  Card,
} from './styles' 

interface IPlayer {
  name: string 
  value: string 
  scores: number[]
}

const PLAYERS = [
  { name: 'Bruna', value: '', scores: [] },
  { name: 'Bruno', value: '', scores: [] },
  { name: 'Fumegalli', value: '', scores: [] },
  { name:  'Luan', value: '', scores: [] },
]

const ROUNDS = 15

const Table: React.FC = () => {
  const [players, setPlayers] = useState<IPlayer[]>(PLAYERS)

  function onChangeText(e: React.FormEvent<HTMLInputElement>, index: number) {
    const newPlayers = players 

      newPlayers[index].value = e.currentTarget.value 

      setPlayers([...newPlayers])
  }

  function onClick() {
    if (players.every(value => value.value !== '')) {
      const newPlayers = players

      newPlayers.forEach((player) => {
        player.scores.push(Number(player.value))
        
        player.value = ''
      })

      setPlayers([...newPlayers])
    }
  }

  return (
    <Container>
        <Card>
        <thead>
          <tr>
            <th>
              <p>Pergunta</p>
            </th>
            
            {players.map((player: IPlayer, index: number) => (
              <th>
                <ContentUser>
                  <Icon src={avatar} />
                  {player.name}
                </ContentUser>
                <TextInput
                  required
                  type="number"
                  onChange={(e) => onChangeText(e, index)}
                  value={player.value}
                />
              </th>
            ))}

            <th>
              <Button onClick={onClick}>Lançar</Button>
            </th>
          </tr>
        </thead>
        </Card>

        <Card>
        <tbody>
          <td>
            {[...Array(ROUNDS)].map((_, index) => (
              <tr>{index + 1}</tr>
            ))}
          </td>

          {players.map((player: IPlayer) => (
            <td>
              {player.scores.map((score) => (
                  <tr>{score}</tr>
              ))}
            </td>
          ))}
        </tbody>
        </Card>
      </Container>
  )
}

export default Table