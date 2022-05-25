import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import { AuthParamList } from '../../Routes/auth.routes'

import {
  Container,
  ForgetPasswordButton,
  ForgotPasswordText,
  InputArea,
  Logo,
} from './styles'

type authProps = StackNavigationProp<AuthParamList>

export const Home = () => {
  const { signIn } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    await signIn(email, password)
  }

  return (
    <Container>
      <ForgotPasswordText>Home</ForgotPasswordText>
    </Container>
  )
}
