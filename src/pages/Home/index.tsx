import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, PublicationsProps } from '../../context/auth'
import { AppParamList } from '../../Routes/app.routes'
import { Picker } from '@react-native-picker/picker'
import Image from '../../assets/doberman.jpg'

import {
  Container,
  Header,
  HeaderTitle,
  Item,
  ItemBottomArea,
  ItemCity,
  ItemDescription,
  ItemImage,
  ItemRace,
  ItemTextArea,
  ItemTitle,
  ItemType,
  List,
  PickerArea,
} from './styles'
import { Text } from 'react-native'
import { Button } from '../../components/Button'

type authProps = StackNavigationProp<AppParamList>

interface DataProp {
  item: PublicationsProps
}

export const Home = () => {
  const { getPublication, publications, create } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()
  const [itemsCity, setItemsCity] = useState()
  const [itemsType, setItemsType] = useState()
  const [itemsRace, setItemsRace] = useState()

  useEffect(() => {
    getPublication()
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

      {/* {publications.map(item => (
        <Button label='tetse' onPress={() => alert('tests')} />
      ))} */}

      {create && (
        <Item>
          <ItemImage source={Image} />

          <ItemTextArea>
            <ItemTitle>{publications.title}</ItemTitle>
            <ItemDescription>{publications.description}</ItemDescription>
            <ItemBottomArea>
              <ItemCity>{publications.city}</ItemCity>
              <ItemRace>{publications.race}</ItemRace>
              <ItemType>{publications.type}</ItemType>
            </ItemBottomArea>
          </ItemTextArea>
        </Item>
      )}
    </Container>
  )
}
