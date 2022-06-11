import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import { Button, ButtonArea, ButtonText, Container, Title } from './styles'

export const Donation = () => {
  const { createPublication } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [city, setCity] = useState('')
  const [race, setRace] = useState('')

  const handleCreatePublication = () => {
    createPublication(title, description, type, city, race)
  }

  return (
    <Container>
      <Title>Doação</Title>

      <Input
        label='Titulo da Publicação'
        onChangeText={setTitle}
        value={title}
      />

      <Input
        label='Descrição'
        onChangeText={setDescription}
        value={description}
      />
      <Input label='Espécie' onChangeText={setType} value={type} />
      <Input label='Cidade' onChangeText={setCity} value={city} />
      <Input label='Raça' onChangeText={setRace} value={race} />

      <ButtonArea>
        <Button onPress={handleCreatePublication}>
          <ButtonText>Publicar</ButtonText>
        </Button>
        <Button>
          <ButtonText>Cancelar</ButtonText>
        </Button>
      </ButtonArea>
    </Container>
  )
}
