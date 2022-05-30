import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import { ArrowIcon, BackButton, Container, Title } from './styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthParamList } from '../../Routes/auth.routes'

type authProps = StackNavigationProp<AuthParamList>

export const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()
  const [email, setEmail] = useState('')

  async function handleRegister() {
    await forgetPassword(email)

    navigation.navigate('Login')
  }

  return (
    <Container>
      <StatusBar style='dark' />
      <BackButton>
        <ArrowIcon onPress={() => navigation.goBack()} />
      </BackButton>
      <Title>Esqueceu a senha</Title>

      <Input label='Email' value={email} onChangeText={setEmail} />

      <Button label='Enviar' onPress={handleRegister} />
    </Container>
  )
}
