import React from 'react'
import { Container } from './styles'

interface InputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
}

export const Input = ({ label, value, onChangeText }: InputProps) => {
  return (
    <Container
      mode='outlined'
      label={label}
      value={value}
      onChangeText={text => onChangeText(text)}
    />
  )
}
