import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ArrowIcon, BackButton, Container, Title } from './styles'

export const Register = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <BackButton>
        <ArrowIcon onPress={() => navigation.goBack()} />
      </BackButton>
      <Title>Registrar</Title>

      <Input label='Email' />
      <Input label='Senha' />
      <Input label='Confirmar senha' />
      <Input label='Telefone' />

      <Button label='Registrar' onPress={() => {}} />
    </Container>
  )
}
