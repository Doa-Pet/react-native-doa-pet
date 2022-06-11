import React from 'react'

import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages/Home'
import { Donation } from '../pages/Donation'
import theme from '../global/theme'
import { Profile } from '../pages/Profile'
import HomeIcon from '../assets/home.svg'
import PlusIcon from '../assets/plus.svg'
import ProfileIcon from '../assets/profile.svg'

export type AuthParamList = {
  Home: undefined
}

const Tabs = AnimatedTabBarNavigator()

export const AppRoutes = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        activeBackgroundColor: '#979797',
        tabStyle: {
          backgroundColor: theme.colors.main,
        },
        labelStyle: {
          fontSize: 14,
          fontFamily: theme.fonts.regular,
        },
      }}
    >
      <Tabs.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name='Donation'
        component={Donation}
        options={{
          tabBarIcon: ({ focused }) => <PlusIcon />,
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon />,
        }}
      />
    </Tabs.Navigator>
  )
}
