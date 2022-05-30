import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
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
  const { signOut } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()

  async function handleLogin() {
    signOut()
  }

  return (
    <Container>
      <ForgotPasswordText>Home</ForgotPasswordText>
      <Button onPress={handleLogin} label='testes' />
    </Container>
  )
}
