import React, { useContext, useState } from 'react'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import {
  Button,
  ButtonArea,
  ButtonText,
  Container,
  ImageButton,
  ImageButtonText,
  Title,
} from './styles'
import * as ImagePicker from 'expo-image-picker'
import { AppParamList } from '../../routes/app.routes'
import { StackNavigationProp } from '@react-navigation/stack'

export const Donation = () => {
  const { createPublication } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [city, setCity] = useState('')
  const [race, setRace] = useState('')
  const [image, setImage] = useState(null)

  const handleCreatePublication = () => {
    createPublication(title, description, type, city, race, image)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <Container>
      <Title>Doação</Title>

      <Input
        label='Titulo da Publicação'
        onChangeText={setTitle}
        value={title}
      />

      <ImageButton onPress={pickImage}>
        <ImageButtonText>Selecionar imagem</ImageButtonText>
      </ImageButton>

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
