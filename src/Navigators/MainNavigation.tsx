import React, { useState } from 'react'
import * as Linking from 'expo-linking'
import * as Animatable from 'react-native-animatable'
// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Colors, QuestionHeaderView } from '../Components/styles'
import { MainStack, MainRoutes } from './routes'

import userstate from '../Recoil/userstate'
import { useRecoilState } from 'recoil'

//Screens Auth
import SplashScreen from '../Pages/SplashScreen'

//Screens Main
import NavBar from '../Pages/NavBar'

const { primary, grey, white, black } = Colors
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Question1 } from '../Pages/Question1'
import { Question2 } from '../Pages/Question2'
import { Question3 } from '../Pages/Question3'
import { View, StyleSheet } from 'react-native'
import { Question4 } from '../Pages/Question4'

import { DefaultTheme } from '@react-navigation/native'

export type resetParams = {
  mode: string
  oobCode: string
}

const HomeNavigator = (): React.ReactElement => {
  return <NavBar />
}

const fade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

const SurveyNavigator = (): React.ReactElement => {
  return (
    <View style={{ flex: 1, backgroundColor: grey }}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: grey,
          },
        }}
        initialRouteName={MainRoutes.SplashScreen}
      >
        <MainStack.Screen
          name={MainRoutes.SplashScreen}
          component={SplashScreen}
        />
        <MainStack.Screen name={MainRoutes.Question1} component={Question1} />
        <MainStack.Screen name={MainRoutes.Question2} component={Question2} />
        <MainStack.Screen name={MainRoutes.Question3} component={Question3} />
        <MainStack.Screen name={MainRoutes.Question4} component={Question4} />
      </MainStack.Navigator>
    </View>
  )
}

const MainNavigator = (): React.ReactElement => {
  const [user, setuser] = useRecoilState(userstate)
  console.log(user)
  if (!user.completed) return <SurveyNavigator />
  else return <HomeNavigator />
  // return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator />
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  textInput: {
    color: white,
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomColor: white,
    marginTop: 30,
    width: 50, // Add this to specify bottom border color
    borderBottomWidth: 3, // Add this to specify bottom border thickness
  },
})

export default MainNavigation
