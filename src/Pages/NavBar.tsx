import React, { useRef, useState } from 'react'
import { SafeAreaView, StatusBar, TouchableOpacity, View, Text, ImageBackground } from 'react-native'

//Screens
import Home from './Home'
import PlanHome from './PlanHome'
import Analytics from './Analytics'

import Connect from './Connect'
import Swiper from 'react-native-swiper'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Routes
import { MainRoutes } from './../Navigators/routes'

//Colors
import { CenterGreenOval, Colors, ProfilePicture, QuestionText } from '../Components/styles'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import QRCode from './QRCode'
import { height, width } from 'styled-system'
import { grey100, transparent } from 'react-native-paper/lib/typescript/styles/colors'
import PlanDetails from './PlanDetails'
import { FlatList } from 'react-native-gesture-handler'
import weekplanstate from '../Recoil/weekplanstate'
import { useRecoilState, useRecoilValue } from 'recoil'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { transform } from 'lodash'
// import QRCode from './QRCode'

const { primary, white, black, grey } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const PlanStack = createStackNavigator()
const GraphStack = createStackNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const NavBar = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'podium' : 'podium-outline'
          } else if (route.name === 'Plan') {
            iconName = focused ? 'calendar' : 'calendar-outline'
          } else if (route.name === 'Trends') {
            iconName = focused ? 'analytics' : 'analytics-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveBackgroundColor: grey,
        tabBarInactiveBackgroundColor: grey,
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: 'gray',
        tabBarBackgroundColor: grey,
        tabBarStyle: {
          backgroundColor: grey,
          paddingTop:10
        },
      })}
    >
      <Tab.Screen name={MainRoutes.Home} component={HomeStackScreen} />
      <Tab.Screen name={MainRoutes.DateList} component={PlanStackScreen} />
      <Tab.Screen name={MainRoutes.Analytics} component={GraphsStackScreen} />
      {/* <Tab.Screen name={MainRoutes.Connect} component={Connect} /> */}
    </Tab.Navigator>
  )
}

export default NavBar

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <HomeStack.Screen
      
        name={MainRoutes.Home}
        component={Home}
      />

      <HomeStack.Screen
        component={QRCode}
        name={MainRoutes.QRCode}
        options={{
          title: 'QR Code',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
    </HomeStack.Navigator>
  )
}

var getDaysInMonth = function(month,year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
 return new Date(year, month + 1, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};


const PlanHeader = ({navigation}) => {
  const weeks = []
  const letterDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const mealNames = ['Breakfast', 'Lunch', 'Dinner']
  var Day = new Date()
  while (Day.getDay() != 0) {
    Day.setDate(Day.getDate() - 1)
  }
  const today = Day.getDate()
  var cmonth = Day.getMonth()
  var cyear = Day.getFullYear()

  const [weekplan, setweekplan] = useRecoilState(weekplanstate)
  var selectedDate = new Date()
  selectedDate.setDate(selectedDate.getDate() + weekplan.selectedDay)

  var selectedMeal = weekplan.selectedMeal

  const swiperRef = useRef(null)

  var compensate = 1
  for (let i = 0 ; i < 3; i++) {
    var week = []
    for (let j = 0; j < 7; j++) {
      if (today + j + i * 7 <= getDaysInMonth(cmonth, cyear)) {
        week.push( { day: today + j + i * 7, weekday: j, week: i} )
      }
      else {
        week.push( { day: compensate, weekday: j, week: i } )
        compensate++
      }
      
    }
    weeks.push(week)
  }

  const [weekstate, setweekstate] = useState(weeks)

  const renderWeek = ({item}) => {
    return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        width: 44,
        // backgroundColor: 'white',
        alignItems: 'center',
        height: 45,
      }}
      >
        <TouchableOpacity onPress={() => {
          var newweeks = []
          for (let i = 0 ; i < 3; i++) {
            newweeks.push( weeks[(item.week + i) %3])
          }
          setweekplan({ ...weekplan, selectedDay: item.day, selectedDish: 0})
          setweekstate(newweeks)
          
        } } style={{flex:1}}>
          
          {
            item.day == weekplan.selectedDay ? 
            <View style={{flex:1, alignItems: 'center'}} >
              <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: grey,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              {letterDays[item.weekday]}
            </Text>
          <Text
          style={{
            fontSize: 15,
            color: 'gray',
            textAlign: 'center',
            textAlignVertical: 'center',
          }} >
          {item.day}
        </Text>
        <MaterialCommunityIcons name="leaf" size={12} color={grey} style={{marginTop: -3}} />
        </View>
          :
          <View>
              <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: grey,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              {letterDays[item.weekday]}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'gray',
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              {item.day}
            </Text>
            </View>
          }
          
        
        </TouchableOpacity>
      </View>
    )
  }


  return (
    <SafeAreaView style={{
      backgroundColor: primary,
      height: 120, }}>
        {
       selectedMeal == -1 ? 
     <Swiper ref={swiperRef} style={{ alignItems: 'center', justifyContent: 'center'
     }} showsButtons showsPagination={false} loop={true} nextButton={<Text style={{ fontSize:50, color: grey}}>›</Text>} prevButton={<Text style={{ fontSize:50, color: grey}}>‹</Text>}>
       <View style={{
          width:'100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: primary,
       }}>
         <FlatList
          data={weekstate[0]}
          renderItem={renderWeek}
          horizontal={true}
          keyExtractor={(item) => item.day}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width:'100%', flex:1}} 
         >
         </FlatList>
       </View>
       <View style={{
          width:'100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: primary,
       }}>
          <FlatList
          data={weekstate[1]}
          renderItem={renderWeek}
          horizontal={true}
          keyExtractor={(item) => item.day}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width:'100%', flex:1}} 
         >
         </FlatList>
       </View>
       <View style={{
          width:'100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: primary,
       }}>
         <FlatList
          data={weekstate[2]}
          renderItem={renderWeek}
          horizontal={true}
          keyExtractor={(item) => item.day}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width:'100%', flex:1}} 
         >
         </FlatList>
       </View>
     </Swiper>
     :
     <View 
      style={{
        flex  : 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
     >
      <TouchableOpacity onPress={() => {
          setweekplan({ ...weekplan, selectedMeal: -1, selectedDish: 0 })
            navigation.navigate(MainRoutes.DateList)
        }}
        style={
          {backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 0, justifyContent: 'center', alignItems: 'center', zIndex: 4}
        }
        >
         <Text style={{ fontSize:50, color: grey}}>‹</Text>
          
      </TouchableOpacity>
       
      <View 
        style={{
          flex  : 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
      <Text style={{fontSize: 50, color: grey}}>
        {mealNames[selectedMeal]}
        </Text>
        </View>
      </View>
}
   </SafeAreaView>
  ) 
}

const PlanStackScreen = ({ navigation }) => {
  return (
    <PlanStack.Navigator
      screenOptions={{
        headerMode: 'float',
        header: (props) => <PlanHeader {...props} />, 
      }}
    >
      <PlanStack.Screen
        name={MainRoutes.DateList}
        component={PlanHome}
      />

      <PlanStack.Screen
        name={MainRoutes.PlanDetails}
        component={PlanDetails}
      />

    </PlanStack.Navigator>
  )
}

const GraphsStackScreen = ({ navigation }) => {
  return (
    <GraphStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <GraphStack.Screen
        name={MainRoutes.Analytics}
        component={Analytics}
        options={{
          title: 'Analytics',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: primary,
            fontSize: 60,
            width: 400,
            height: 80,
            marginTop: 15,
          },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
              }}
            ></View>
          ),
        }}
      />
    </GraphStack.Navigator>
  )
}
const QRComp = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MainRoutes.QRCode)}
      style={{ marginHorizontal: 20 }}
    >
      <Ionicons name={'qr-code-outline'} size={30} color={black} />
    </TouchableOpacity>
  )
}
