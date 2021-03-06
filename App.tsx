import React, { useState } from 'react'
import { Button, StyleSheet, View, Dimensions, LogBox } from 'react-native'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { Colors, WelcomeTitle } from './src/Components/styles'

// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import { RecoilRoot } from 'recoil'

import * as Linking from 'expo-linking'

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.32

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

const App = (): React.ReactElement => {
  LogBox.ignoreAllLogs(true)

  return (
    <RecoilRoot>
      <NavigationContainer theme={navTheme}>
        <RootStack />
      </NavigationContainer>
    </RecoilRoot>
  )
}

export default App
