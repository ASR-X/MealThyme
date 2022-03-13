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
  StatusBar,
  ActivityIndicator,
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

const Home = ({ route, navigation }): React.ReactElement => {

  const [weekplan, setweekplan] = useRecoilState(weekplanstate)
  const [Meals, setMeals] = useState([
    {
      id: '1',
      title: 'Breakfast',
      expanded: true,
      checked: false,
      loaded: false,
    },
    {
      id: '2',
      title: 'Lunch',
      expanded: false,
      checked: false,
      loaded: false,
    },
    {
      id: '3',
      title: 'Dinner',
      expanded: false,
      checked: false,
      loaded: false,
    },
  ])

  useEffect( () => setMeals(
    [
      {
        id: '1',
        title: 'Breakfast',
        expanded: true,
        checked: false,
        loaded: false,
      },
      {
        id: '2',
        title: 'Lunch',
        expanded: false,
        checked: false,
        loaded: false,
      },
      {
        id: '3',
        title: 'Dinner',
        expanded: false,
        checked: false,
        loaded: false,
      },
    ]
  ), [weekplan])

  const today = new Date().getDate()

  const getID = (id: string) => {
    var convid = parseInt(id)
    console.log(( (weekplan.selectedDay - today) * 3 + convid-1 ) *3)
    return ( (weekplan.selectedDay - today) * 3 + convid-1 ) *3
}

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
      borderColor: item.id=='1' ? primary : white,
    }}>
     <View style={{
        flexDirection: "row",
        alignItems: 'center',
      }}>

      <Image source={{uri: 'https://asrx.ngrok.io/image?id=' + getID(item.id), height: 150}}
          style = {{
            width: 40,
            height: 40,
            borderRadius: 20
          }}
          // style={ { flex:1, display: (item.loaded ? 'flex' : 'none') }}
          />

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
          fontWeight: item.id=='1' ? '300' : '100',
          color: item.id=='1' ? primary : white,
        }}
      >
        {item.title}
      </Text>
        </View>
          {item.expanded ? <Icon name="arrow-drop-up" type="material" color={white} /> : <Icon name="arrow-drop-down" type="material" color={white} /> }
      </View>
      {
        item.expanded ?
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          marginVertical: 15,
        }}>
              <View style={{
                flex: 1, maxHeight: 150,
              }}>
                 <ActivityIndicator
                      style={{ display: (item.loaded ? 'none' : 'flex'), zIndex: 2 }}
                  />
                <View> 
                 <Image source={{uri: 'https://asrx.ngrok.io/image?id=' + getID(item.id)}} resizeMode="contain"
                  onLoadEnd={ () => {
                    setMeals(prevState => {
                      return prevState.map(meal => {
                        if (meal.id === item.id) {
                          meal.loaded = true
                        }
                        return meal
                      }  
                      )
                    })
                  }}

                  style={[{width: 1, height: 1,},
                    item.loaded && {width: 150, height: 150,}]}
                  />
                </View>
                  
                {/* <Image style={{
                    maxHeight: 150,
                    maxWidth: 150,
                  }} resizeMode='contain' source={require('../Assets/slider2.jpg')} ></Image> */}
              </View>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: white,
                  flex:1
                }}
              >
                <Text
                style={{
                  fontSize: 20,
                  fontWeight: '200',
                  color: primary,
                }}
              >Entreé: </Text>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: white,
                  flex:1
                }}
              > <Text
              style={{
                fontSize: 20,
                fontWeight: '200',
                color: primary,
              }}
            >Side: </Text> {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: white,
                  flex:1
                }}
              > <Text
              style={{
                fontSize: 20,
                fontWeight: '200',
                color: primary,
              }}
            >Fruits: </Text>
                {item.title}
              </Text>
              </View>
              <View style={{flex:1}}>
              <TouchableOpacity style={{zIndex: 2}} onPress={() => {
                if (item.id != '1' && item.id != '0') {
                  return
                }
                const currentChecked = item.checked ? true : false
                setMeals(prevState => {
                  return prevState.map(meal => {
                    if (meal.id === item.id) {
                      meal.checked = !meal.checked
                      if (meal.checked) {
                        meal.expanded = !meal.expanded
                      }
                    }
                    return meal
                  })
                })
                setMeals(prevState => {
                  return prevState.map(meal => {
                    if (!currentChecked) {
                      meal.id = (parseInt(meal.id) - 1) + ''
                    }
                    else{
                      meal.id = (parseInt(meal.id) + 1) + ''
                    }
                    return meal
                  })
                })
              }}>
                    <Icon name="check-circle" type="material" color={item.checked ? primary : white} containerStyle={{height: 50, width: 50, alignContent: 'center', justifyContent: 'center'}} />
                  </TouchableOpacity>
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: grey,
          //marginTop: 30,
        }}
      >
         
        <StatusBar barStyle="dark-content" />
        <View>
          <GreenOval />
        </View>

        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop: 190,
          flex: 1
        }}>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: 20,
            marginBottom: 5,
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
              color: primary,}}>
                Glance
            </Text>
          </View>
          <FlatList
            data={Meals}
            renderItem={MealCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ justifyContent: 'flex-start', paddingBottom:20}} 
          />
        </View>

      </SafeAreaView>
  )
}

export default Home
