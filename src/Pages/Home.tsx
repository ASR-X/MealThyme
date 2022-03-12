import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import { MainRoutes } from '../Navigators/routes'

const data = [
  {
    value: '0',
    label: '1 M',
  },
  {
    value: '1',
    label: '3 M',
  },
  {
    value: '2',
    label: '1 Y',
  },
]
//Components
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native'

import {
  Colors,
  StyledHeader,
  ProfilePicture,
  GreenOval,
  TextWrapper,
  CategoryContainer,
  CategoryIcon,
  CategoryButton,
  CategoryButtonText,
  CardImage,
  CardInfo,
  CardWrapper,
  CardImageWrapper,
  CardTitle,
  CardDetails,
  SplashButtonView,
  SplashTextSign,
  StyledButton,
} from '../Components/styles'
//Slider
import VerticalSwiper from '../Components/VerticalSwiper'

// Colors
const { primary, white, grey, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

import weekplanstate from '../Recoil/weekplanstate'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Icon } from 'react-native-elements'
import { stubFalse } from 'lodash'

const Home = ({ route, navigation }): React.ReactElement => {

  const [weekplan, setweekplan] = useRecoilState(weekplanstate)
  const [Meals, setMeals] = useState([
    {
      id: '1',
      title: 'Breakfast',
      expanded: true,
      checked: false,
    },
    {
      id: '2',
      title: 'Lunch',
      expanded: false,
      checked: false,
    },
    {
      id: '3',
      title: 'Dinner',
      expanded: false,
      checked: false,
    },
  ])

  const MealCard = ({item}): React.ReactElement => {

    return (
      <TouchableOpacity onPress={() => {
        setMeals(prevState => {
          return prevState.map(meal => {
            if (meal.id === item.id) {
              meal.expanded = !meal.expanded
            }
            return meal
          })
        })
      }}>
    <View style={{
      flexDirection: 'column',
      flex: 1,
      marginHorizontal: 12,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      marginVertical: 7,
      paddingVertical: 7,
      borderWidth: 1,
      borderColor: primary,
    }}>
     <View style={{
        flexDirection: "row",
        alignItems: 'center',
      }}>

        <ProfilePicture resizeMode="cover"
        source={require('../Assets/slider2.jpg')}></ProfilePicture>

    <View style={{
        marginHorizontal: 12,
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 2
      }}>

      <Text
        style={{
          fontSize: 35,
          fontWeight: '200',
          color: primary,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '200',
          color: white,
        }}
      >
        English Continental
      </Text>
        </View>
          {item.expanded ? <Icon name="arrow-drop-up" type="material" color={white} /> : <Icon name="arrow-drop-down" type="material" color={white} /> }
      </View>
      {
        item.expanded ?
          <View style={{ 
            flex: 1,
            marginVertical: 15,
            flexDirection: 'column',
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                      <Image style={{
                        maxHeight: 150,
                        maxWidth: 150,
                      }} resizeMode='contain' source={require('../Assets/slider2.jpg')} ></Image>
                  </View>
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: 200,
                }}>
                   <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      color: white,
                      marginTop: 5,
                    }}
                  >
                    Protein: {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      color: white,
                      marginTop: 5,
                    }}
                  > 
                    Dairy: {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      color: white,
                      marginTop: 5,
                    }}
                  > 
                    Grains: {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      marginTop: 5,
                      color: white,
                    }}
                  > 
                    Fruits: {item.title}
                  </Text>
                  </View>
                <View style={{flex:1}}>
                  <TouchableOpacity style={{zIndex: 2}} onPress={() => { 
                     setMeals(prevState => {
                      return prevState.map(meal => {
                        if (meal.id === item.id) {
                          meal.checked = !meal.checked
                        }
                        return meal
                      })
                    })
                  }}>
                    <Icon name="check-circle" type="material" color={item.checked ? primary : white} />
                  </TouchableOpacity>
                </View>
                 </View>
            </View>
          </View>
        :
        <></>
      }
    </View>
    </TouchableOpacity>
  )
  }

  return (
    <View style={{ flexGrow: 1, backgroundColor: white }}>
      <SafeAreaView
        style={{
          flexGrow: 1,
          backgroundColor: grey,
          //marginTop: 30,
        }}
      >
        <View>
          <GreenOval />
        </View>

        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop: 200,
          flex: 1
        }}>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: 20,
          }}>
            <Text style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: white,}}>
                At a
            </Text>
            <Text style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: white,}}>
                Glance
            </Text>
          </View>
          <FlatList
            data={Meals}
            renderItem={MealCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ justifyContent: 'flex-start' }} 
          />
        </View>

      </SafeAreaView>
    </View>
  )
}

export default Home
