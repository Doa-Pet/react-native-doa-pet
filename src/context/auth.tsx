import React, { createContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { showMessage } from 'react-native-flash-message'
import theme from '../global/theme'

interface AuthContextProps {
  signed: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (
    email: string,
    password: string,
    phone: string,
    name: string
  ) => Promise<void>
  forgetPassword: (email: string) => Promise<void>
  signOut: () => void
  createPublication: (
    title: string,
    description: string,
    type: string,
    city: string,
    race: string
  ) => void
  getPublication: () => void
  publi: [
    {
      city: string
      description: string
      race: string
      title: string
      type: string
    }
  ]
}

export const AuthContext = createContext({} as AuthContextProps)

interface ReactElement {
  children: React.ReactNode
}

export default function AuthProvider({ children }: ReactElement) {
  const [user, setUser] = useState(null)
  const [publi, setPubli] = useState(null)

  const signIn = async (email: string, password: string) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password)

      setUser(response)
      showMessage({
        message: 'Login feito com sucesso!',
        type: 'success',
        backgroundColor: theme.colors.confirmation,
        statusBarHeight: 20,
      })

      await database()
        .ref('users')
        .on('value', snapshot => {
          console.log(snapshot.val())
        })
    } catch (err) {
      console.log(err)
    }
  }

  const signUp = async (
    email: string,
    password: string,
    phone: string,
    name: string
  ) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password
      )

      await database().ref('users').child(response.user.uid).set({
        name,
        phone,
      })

      showMessage({
        message: 'Usuário criado com sucesso!',
        type: 'success',
        backgroundColor: theme.colors.confirmation,
        statusBarHeight: 20,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const createPublication = async (
    title: string,
    description: string,
    type: string,
    city: string,
    race: string
  ) => {
    try {
      await database()
        .ref('publications')
        .child(Math.random().toString().replace('.', ''))
        .set({
          title,
          description,
          type,
          city,
          race,
        })
    } catch (err) {
      console.log(err)
    }
  }

  const getPublication = async () => {
    try {
      await database()
        .ref('publications')
        .on('value', snapshot => {
          setPubli(snapshot.val())
        })
    } catch (err) {
      console.log(err)
    }
  }

  const forgetPassword = async (email: string) => {
    try {
      await auth().sendPasswordResetEmail(email)
    } catch (err) {
      console.log(err)
    }
  }

  const signOut = async () => {
    try {
      await auth().signOut()
      setUser(null)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signIn,
        signUp,
        forgetPassword,
        signOut,
        createPublication,
        getPublication,
        publi,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
