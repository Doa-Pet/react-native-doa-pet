import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { ForgetPassword } from '../pages/ForgetPassword'

export type AuthParamList = {
  Login: undefined
  Register: undefined
  ForgetPassword: undefined
}

const Stack = createStackNavigator()

export const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
    </Stack.Navigator>
  )
}
