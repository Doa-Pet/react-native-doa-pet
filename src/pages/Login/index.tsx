import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthParamList } from '../../Routes/auth.routes'

import {
  Container,
  ForgetPasswordButton,
  ForgotPasswordText,
  InputArea,
  Logo,
} from './styles'

type authProps = StackNavigationProp<AuthParamList>

export const Login = () => {
  const navigation = useNavigation<authProps>()

  return (
    <Container>
      <Logo />

      <InputArea>
        <Input label='Email' />
        <Input label='Senha' />
      </InputArea>

      <ForgetPasswordButton>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgetPasswordButton>

      <Button label='Entrar' onPress={() => {}} />
      <Button
        label='Registrar'
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  )
}
