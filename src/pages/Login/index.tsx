import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React, { useContext, useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import theme from '../../global/theme'
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
  const { signIn } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    if (email && password) {
      await signIn(email, password)
    } else {
      showMessage({
        message: 'Preencha os dados para realizar o login!',
        type: 'success',
        backgroundColor: theme.colors.error,
        statusBarHeight: 20,
      })
    }
  }

  return (
    <Container>
      <StatusBar style='dark' />
      <Logo />

      <InputArea>
        <Input label='Email' value={email} onChangeText={setEmail} />
        <Input
          label='Senha'
          value={password}
          onChangeText={setPassword}
          secureText={true}
        />
      </InputArea>

      <ForgetPasswordButton
        onPress={() => navigation.navigate('ForgetPassword')}
      >
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgetPasswordButton>

      <Button label='Entrar' onPress={handleLogin} />
      <Button
        label='Registrar'
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  )
}
