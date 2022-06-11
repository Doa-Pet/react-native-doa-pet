import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { AuthContext } from '../../context/auth'
import { AuthParamList } from '../../Routes/auth.routes'
import { Picker } from '@react-native-picker/picker'

import { Container, Header, HeaderTitle, PickerArea } from './styles'
import { FlatList, ScrollView, Text, View } from 'react-native'

type authProps = StackNavigationProp<AuthParamList>

export const Home = () => {
  const { getPublication, publi } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()
  const [itemsCity, setItemsCity] = useState()
  const [itemsType, setItemsType] = useState()
  const [itemsRace, setItemsRace] = useState()

  useEffect(() => {
    getPublication()

    console.log(publi)
  }, [])

  return (
    <Container>
      <Header>
        <HeaderTitle>Doações</HeaderTitle>

        <PickerArea>
          <Picker
            selectedValue={itemsCity}
            onValueChange={(itemValue, itemIndex) => setItemsCity(itemValue)}
            style={{
              width: 130,
              color: '#fff',
            }}
            mode='dropdown'
          >
            <Picker.Item label='Cidade' />
            <Picker.Item label='Sorocaba' value='Sorocaba' />
            <Picker.Item label='Votorantim' value='Votorantim' />
            <Picker.Item label='Tatuí' value='Tatuí' />
          </Picker>
          <Picker
            selectedValue={itemsType}
            onValueChange={(itemValue, itemIndex) => setItemsType(itemValue)}
            style={{
              width: 136,
              color: '#fff',
            }}
            mode='dropdown'
          >
            <Picker.Item label='Especie' />
            <Picker.Item label='Cachorro' value='Cachorro' />
            <Picker.Item label='Gato' value='Gato' />
            <Picker.Item label='Ave' value='Ave' />
          </Picker>
          <Picker
            selectedValue={itemsRace}
            onValueChange={(itemValue, itemIndex) => setItemsRace(itemValue)}
            style={{
              width: 116,
              color: '#fff',
            }}
            mode='dropdown'
          >
            <Picker.Item label='Raça' />
          </Picker>
        </PickerArea>
      </Header>
    </Container>
  )
}
