import React from 'react'
import { Container } from './styles'

interface InputProps {
  label: string
}

export const Input = ({ label }: InputProps) => {
  return <Container mode='outlined' label={label} />
}
