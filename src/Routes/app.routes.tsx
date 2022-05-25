import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages/Home'

export type AuthParamList = {
  Home: undefined
}

const Stack = createStackNavigator()

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}
