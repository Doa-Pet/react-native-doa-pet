import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { Input } from '../../components/Input'
import { Address, Avatar, Container, Name, Title } from './styles'
import Image from '../../assets/Avatar.png'
import { Button } from '../../components/Button'
import { AuthContext } from '../../context/auth'

export const Profile = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <Container>
      <Title>Minha Conta</Title>

      <Avatar source={Image} />

      <Name>Pedro Henrique</Name>

      <Address>DDD 15 - Sorocaba - SP</Address>

      <Button label='Sair' onPress={signOut} />
    </Container>
  )
}
