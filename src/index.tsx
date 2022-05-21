import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'

import { Routes } from './Routes/routes'
import theme from './global/theme'

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
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style='auto' />
      </ThemeProvider>
    </NavigationContainer>
  )
}
