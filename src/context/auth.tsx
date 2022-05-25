import React, { createContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'

interface AuthContextProps {
  signed: boolean
  signIn: (email: string, password: string) => Promise<void>
  // signOut: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

interface ReactElement {
  children: React.ReactNode
}

export default function AuthProvider({ children }: ReactElement) {
  const [user, setUser] = useState(null)

  async function signIn(email: string, password: string) {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password)

      setUser(response)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signIn,
        // signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
