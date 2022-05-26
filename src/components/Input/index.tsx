import React, { useState } from 'react'
import { Container } from './styles'

interface InputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  secureText?: boolean
}

export const Input = ({ label, value, onChangeText, secureText }: InputProps) => {
  const [passwordHide, setPasswordHide] = useState(secureText)

  return (
    <Container
      mode='outlined'
      label={label}
      value={value}
      onChangeText={text => onChangeText(text)}
      secureTextEntry={passwordHide}
      right={passwordHide ? <Container.Icon name='eye' onPress={() => setPasswordHide(!passwordHide)} /> : <Container.Icon name='eye-off' onPress={() => setPasswordHide(!passwordHide)} />}
    />
  )
}
