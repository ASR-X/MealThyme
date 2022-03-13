import React from 'react'
import { TouchableOpacity, View } from 'react-native'

//Screens
import Home from './Home'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Routes
import { MainRoutes } from '../Navigators/routes'

//Colors
import { Colors, ProfilePicture } from '../Components/styles'
import { Plus } from './Plus'
import Dashboard from './Dashboard'
// import QRCode from './QRCode'

const { primary, white, grey, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const DashboardStack = createStackNavigator()


const HomeNavigator = ():React.ReactElement => {
  return (
    <View style={{ flex: 1, backgroundColor: grey}}>
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name={MainRoutes.Home}
        component={Home}
        initialParams={{ Home: false }}
        options={{
          headerShown: false,
        }}
      />

      <HomeStack.Screen
        component={Plus}
        name={MainRoutes.Plus}
        options={{
          title: 'Plus sign',
          headerShown: false,
        }}
      />

      <HomeStack.Screen
        component={Dashboard}
        name={MainRoutes.Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
    </View>
  )
}

export default HomeNavigator

const DashboardStackScreen = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DashboardStack.Screen
        name={MainRoutes.Dashboard}
        component={Dashboard}
        initialParams={{ Home: false }}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  )
}