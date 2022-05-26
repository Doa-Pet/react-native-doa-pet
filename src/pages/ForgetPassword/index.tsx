import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import { ArrowIcon, BackButton, Container, Title } from './styles'

export const ForgetPassword = () => {
  const { signUp } = useContext(AuthContext)
  const navigation = useNavigation()
  const [email, setEmail] = useState('')

  async function handleRegister() {}

  return (
    <Container>
      <StatusBar style='dark' />
      <BackButton>
        <ArrowIcon onPress={() => navigation.goBack()} />
      </BackButton>
      <Title>Esqueceu a senha</Title>

      <Input label='Email' value={email} onChangeText={setEmail} />

      <Button label='Registrar' onPress={handleRegister} />
    </Container>
  )
}
