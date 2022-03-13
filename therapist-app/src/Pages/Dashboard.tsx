import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

//Components
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Icon } from 'react-native-elements'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { useRecoilState } from 'recoil'

import { Colors, GreenOval, iosStyles } from '../Components/styles'
import weekplanstate from '../Recoil/weekplanstate'
import { Slider } from '@miblanchard/react-native-slider'

// Colors
const { primary, white, grey, black } = Colors

const Dashboard = ({ route, navigation }): React.ReactElement => {
  const patient = route.params.patient
  const [selected, setSelected] = useState('1')
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

  useEffect(() => {
    for (let i = 0; i < Meals.length; i++) {
      var item = { ...Meals[i] }
      setweekplan((prevState) => {
        var prevCompletedMeals = [...prevState.completedMeals]
        prevCompletedMeals[getID(item.id) / 3] = item.checked ? 1 : 0
        return {
          ...prevState,
          completedMeals: prevCompletedMeals,
        }
      })
    }
  }, [Meals])

  console.log(weekplan.completedMeals)

  const today = new Date().getDate()

  const getID = (id: string) => {
    var convid = parseInt(id)
    return ((weekplan.selectedDay - today) * 3 + convid - 1) * 3
  }

  const MealCard = ({ item }): React.ReactElement => {
    return (
      <TouchableOpacity
        onPress={() => {
          setMeals((prevState) => {
            return prevState.map((meal) => {
              if (meal.id === item.id) {
                meal.expanded = !meal.expanded
              }
              return meal
            })
          })
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
            borderColor: item.id == selected ? primary : white,
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
                height: 150,
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
                  fontWeight: item.id == selected ? '300' : '100',
                  color: item.id == selected ? primary : white,
                }}
              >
                {item.title}
              </Text>
            </View>
            {item.expanded ? (
              <Icon name="arrow-drop-up" type="material" color={white} />
            ) : (
              <Icon name="arrow-drop-down" type="material" color={white} />
            )}
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
                  maxHeight: 150,
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
                      item.loaded && { width: 130, height: 150 },
                    ]}
                  />
                </View>

                {/* <Image style={{
                  maxHeight: 150,
                  maxWidth: 150,
                }} resizeMode='contain' source={require('../Assets/slider2.jpg')} ></Image> */}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '200',
                      color: white,
                      width: 200,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: '200',
                        color: primary,
                        fontSize: 20,
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
                      width: 200,
                    }}
                  >
                    {' '}
                    <Text
                      style={{
                        fontWeight: '200',
                        color: primary,
                        fontSize: 20,
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
                      color: white,
                      width: 180,
                    }}
                  >
                    {' '}
                    <Text
                      style={{
                        fontWeight: '200',
                        color: primary,
                        fontSize: 20,
                      }}
                    >
                      Fruits:{' '}
                    </Text>
                    {weekplan.meals[getID(item.id) / 3].fruits}
                  </Text>
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

  const screenWidth = Dimensions.get('window').width

  const [allgraphs, setallgraphs] = useState([])
  const [loading, setloading] = useState(true)

  const [intake, setintake] = useState(0)

  const stable = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  }

  const data = async (color) => {
    return fetch('https://asrx.ngrok.io/statistics/').then(async (response) => {
      const response_ser = await response.json()
      var lbels = new Array(21).fill(0)
      var treturn = {
        labels: lbels.map((x, i) => i),
        datasets: [
          {
            data: response_ser.stat.map((_, i) =>
              parseInt(response_ser.stat[i])
            ),
            color: () => color,
          },
        ],
      }
      return treturn
    })
  }

  const fetchdata = async () => {
    var alldata = []
    alldata.push(await data(primary))
    alldata.push(await data('#E77474'))
    alldata.push(await data('#e7d874'))
    alldata.push(await data('#747ee7'))
    alldata.push(await data('#b074e7'))
    setallgraphs(alldata)
    setloading(false)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const chartConfig = (color) => {
    return {
      backgroundGradientFromOpacity: 0,
      backgroundGradientToOpacity: 0,
      color: () => color,
      barPercentage: 0.5,
      propsForBackgroundLines: {
        strokeDasharray: [],
        strokeWidth: 1,
        fillOpacity: 50,
      },
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: grey,
        //marginTop: 30,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" />
        <View>
          <GreenOval />
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: 170,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              paddingLeft: 20,
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: white,
              }}
            >
              {patient.name.split(' ')[0]}
            </Text>
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: white,
              }}
            >
              {patient.name.split(' ')[1]}
            </Text>
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: primary,
              }}
            >
              Glance
            </Text>
          </View>
          <FlatList
            data={Meals}
            renderItem={MealCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              justifyContent: 'flex-start',
              paddingBottom: 20,
            }}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={primary} />
        ) : (
          <View
            style={{
              paddingLeft: 20,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: primary,
              }}
            >
              Meal Consistency
            </Text>
            <LineChart
              data={allgraphs[0] ? allgraphs[0] : stable}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig(white)}
              withInnerLines={false} // optional
              withShadow={false} // optional
              withHorizontalLabels={false} // optional
              style={{
                marginTop: 10,
                marginLeft: -60,
              }}
              formatXLabel={(value) => {
                var val = parseInt(value)
                if (val % 5 == 0) {
                  return value
                }
                return ''
              }}
              withDots={false}
            />

            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: '#E77474',
              }}
            >
              BMI
            </Text>
            <LineChart
              data={allgraphs[1] ? allgraphs[1] : stable}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig(white)}
              withInnerLines={false} // optional
              withShadow={false} // optional
              withHorizontalLabels={false} // optional
              style={{
                marginTop: 10,
                marginLeft: -60,
              }}
              formatXLabel={(value) => {
                var val = parseInt(value)
                if (val % 5 == 0) {
                  return value
                }
                return ''
              }}
              withDots={false}
            />
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: '#e7d874',
              }}
            >
              Vitamin B
            </Text>
            <LineChart
              data={allgraphs[2] ? allgraphs[2] : stable}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig(white)}
              withShadow={false}
              withInnerLines={false} // optional
              withHorizontalLabels={false} // optional
              style={{
                marginTop: 10,
                marginLeft: -60,
              }}
              formatXLabel={(value) => {
                var val = parseInt(value)
                if (val % 5 == 0) {
                  return value
                }
                return ''
              }}
              withDots={false}
            />
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: '#747ee7',
              }}
            >
              Vitamin C
            </Text>
            <LineChart
              data={allgraphs[3] ? allgraphs[3] : stable}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig(white)}
              withInnerLines={false} // optional
              withShadow={false} // optional
              withHorizontalLabels={false} // optional
              style={{
                marginTop: 10,
                marginLeft: -60,
              }}
              formatXLabel={(value) => {
                var val = parseInt(value)
                if (val % 5 == 0) {
                  return value
                }
                return ''
              }}
              withDots={false}
            />

            <View>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: 'bold',
                  color: primary,
                }}
              >
                Caloric Intake
              </Text>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 20,
                }}
              >
                <Slider
                  animateTransitions
                  maximumTrackTintColor={white}
                  minimumTrackTintColor={primary}
                  thumbStyle={iosStyles.thumb}
                  trackStyle={iosStyles.track}
                  minimumValue={-10}
                  maximumValue={10}
                  step={1}
                  value={intake ? intake : 0}
                  trackClickable={true}
                  onValueChange={(value) => {
                    setintake(value[0])
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: primary }}>-10</Text>
                  <Text style={{ color: primary }}>10</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default Dashboard
