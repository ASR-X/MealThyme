import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import { ChonseSelect } from 'react-native-chonse-select'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
//Components
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native'

import {
  Colors,
  CenterGreenOval,
  StyledHeader,
  ProfilePicture,
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
} from '../Components/styles'
import { Icon } from 'react-native-elements'
import weekplanstate from '../Recoil/weekplanstate'
import { useRecoilState } from 'recoil'
import { getTimeMeasureUtils } from '@reduxjs/toolkit/dist/utils'

// Colors
const { primary, white, grey, black } = Colors

const PlanHome = ({ navigation }): React.ReactElement => {
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
      expanded: true,
      checked: false,
      loaded: false,
    },
    {
      id: '3',
      title: 'Dinner',
      expanded: true,
      checked: false,
      loaded: false,
    },
  ])

  useEffect(
    () =>
      setMeals([
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
          expanded: true,
          checked: false,
          loaded: false,
        },
        {
          id: '3',
          title: 'Dinner',
          expanded: true,
          checked: false,
          loaded: false,
        },
      ]),
    [weekplan]
  )

  const today = new Date().getDate()

  const getID = (id: string) => {
    var convid = parseInt(id)
    console.log(((weekplan.selectedDay - today) * 3 + convid - 1) * 3)
    return ((weekplan.selectedDay - today) * 3 + convid - 1) * 3
  }

  const MealCard = ({ item }): React.ReactElement => {
    return (
      <TouchableOpacity
        onPress={() => {
          setweekplan({
            ...weekplan,
            selectedMeal: parseInt(item.id) - 1,
            selectedDish: 1,
          })
          navigation.navigate(MainRoutes.PlanDetails)
        }}
      >
        <View
          style={{
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
            borderColor: white,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={{
                uri: 'https://asrx.ngrok.io/image?id=' + getID(item.id),
                height: 120,
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
              // style={ { flex:1, display: (item.loaded ? 'flex' : 'none') }}
            />

            <View
              style={{
                marginHorizontal: 12,
                alignItems: 'left',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: '300',
                  color: primary,
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
          {item.expanded ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                marginVertical: 15,
              }}
            >
              <View
                style={{
                  flex: 1,
                  maxHeight: 120,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ActivityIndicator
                  style={{ display: item.loaded ? 'none' : 'flex', zIndex: 2 }}
                />
                <View>
                  <Image
                    source={{
                      uri: 'https://asrx.ngrok.io/image?id=' + getID(item.id),
                    }}
                    resizeMode="contain"
                    // onLoadStart={() => {
                    //   setMeals(Meals.map(meal => {
                    //     if (meal.id === item.id) {
                    //       meal.loaded = false
                    //     }
                    //     return meal
                    //   }))
                    // }}
                    onLoadEnd={() => {
                      setMeals((prevState) => {
                        return prevState.map((meal) => {
                          if (meal.id === item.id) {
                            meal.loaded = true
                          }
                          return meal
                        })
                      })
                    }}
                    style={[
                      { width: 1, height: 1 },
                      item.loaded && { width: 120, height: 120 },
                    ]}
                  />
                </View>

                {/* <Image style={{
                        maxHeight: 120,
                        maxWidth: 120,
                      }} resizeMode='contain' source={require('../Assets/slider2.jpg')} ></Image> */}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      color: white,
                      marginTop: 5,
                      minWidth: 120,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '200',
                        color: primary,
                        marginTop: 5,
                        minWidth: 200,
                      }}
                    >
                      Entreé:{' '}
                    </Text>
                    {weekplan.meals[getID(item.id) / 3].entree}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      color: white,
                      marginTop: 5,
                      minWidth: 150,
                    }}
                  >
                    {' '}
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '200',
                        color: primary,
                        marginTop: 5,
                        minWidth: 150,
                      }}
                    >
                      Side:{' '}
                    </Text>{' '}
                    {weekplan.meals[getID(item.id) / 3].side}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      marginTop: 5,
                      color: white,
                      minWidth: 120,
                    }}
                  >
                    {' '}
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '200',
                        color: primary,
                        marginTop: 5,
                        minWidth: 120,
                      }}
                    >
                      Fruits:{' '}
                    </Text>
                    {weekplan.meals[getID(item.id) / 3].fruits}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginLeft: 135,
                    marginTop: 15,
                    marginBottom: -25,
                  }}
                >
                  <TouchableOpacity
                    style={{ zIndex: 2 }}
                    onPress={() => {
                      if (item.id != '1' && item.id != '0') {
                        return
                      }
                      const currentChecked = item.checked ? true : false
                      setMeals((prevState) => {
                        return prevState.map((meal) => {
                          if (meal.id === item.id) {
                            meal.checked = !meal.checked
                            if (meal.checked) {
                              meal.expanded = !meal.expanded
                            }
                          }
                          return meal
                        })
                      })
                      setMeals((prevState) => {
                        return prevState.map((meal) => {
                          if (!currentChecked) {
                            meal.id = parseInt(meal.id) - 1 + ''
                          } else {
                            meal.id = parseInt(meal.id) + 1 + ''
                          }
                          return meal
                        })
                      })
                    }}
                  >
                    <Icon
                      name="chevron-forward-circle-outline"
                      type="ionicon"
                      color={item.checked ? primary : white}
                      containerStyle={{
                        height: 50,
                        width: 50,
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: grey,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={Meals}
        renderItem={MealCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          paddingBottom: 20,
          paddingTop: 35,
        }}
      />
    </View>
  )
}

export default PlanHome
