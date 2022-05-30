import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'

import { Routes } from './routes'
import theme from './global/theme'
import AuthProvider from './context/auth'
import FlashMessage from 'react-native-flash-message'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <StatusBar style='auto' />
          <FlashMessage position={'top'} autoHide />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
