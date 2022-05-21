import React from 'react'
import { ButtonText, Container } from './styles'

interface ButtonProps {
  label: string
  onPress: () => void
}

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </Container>
  )
}
