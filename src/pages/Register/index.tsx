import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React, { useContext, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import theme from '../../global/theme'
import { AuthParamList } from '../../Routes/auth.routes'
import { ArrowIcon, BackButton, Container, Title } from './styles'

type authProps = StackNavigationProp<AuthParamList>

export const Register = () => {
  const { signUp } = useContext(AuthContext)
  const navigation = useNavigation<authProps>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  async function handleRegister() {
    if (password === confirmPassword && password && email && name && phone) {
      await signUp(email, password, phone, name)
      navigation.navigate('Login')
    } else if (
      password !== confirmPassword &&
      password &&
      email &&
      name &&
      phone
    ) {
      showMessage({
        message: 'As senhas não são correspondentes!',
        type: 'success',
        backgroundColor: theme.colors.error,
        statusBarHeight: 20,
      })
    } else {
      showMessage({
        message: 'Preencha os dados para realizar o cadastro!',
        type: 'success',
        backgroundColor: theme.colors.error,
        statusBarHeight: 20,
      })
    }
  }

  return (
    <Container>
      <StatusBar style='dark' />
      <BackButton>
        <ArrowIcon onPress={() => navigation.goBack()} />
      </BackButton>
      <Title>Registrar</Title>

      <Input label='Nome' value={name} onChangeText={setName} />
      <Input label='Telefone' value={phone} onChangeText={setPhone} />
      <Input label='Email' value={email} onChangeText={setEmail} />
      <Input
        label='Senha'
        value={password}
        onChangeText={setPassword}
        secureText={true}
      />
      <Input
        label='Confirmar senha'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureText={true}
      />

      <Button label='Registrar' onPress={handleRegister} />
    </Container>
  )
}
