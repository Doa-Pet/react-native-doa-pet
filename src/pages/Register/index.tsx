import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/auth'
import { ArrowIcon, BackButton, Container, Title } from './styles'

export const Register = () => {
  const { signIn } = useContext(AuthContext)
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')

  async function handleRegister() {
    await signIn(email, password)
  }

  return (
    <Container>
      <BackButton>
        <ArrowIcon onPress={() => navigation.goBack()} />
      </BackButton>
      <Title>Registrar</Title>

      <Input label='Email' value={email} onChangeText={setEmail} />
      <Input label='Senha' value={password} onChangeText={setPassword} />
      <Input
        label='Confirmar senha'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Input label='Telefone' value={phone} onChangeText={setPhone} />

      <Button label='Registrar' onPress={handleRegister} />
    </Container>
  )
}
