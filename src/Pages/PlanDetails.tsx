import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useCallback, useEffect, useMemo } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useRecoilState } from 'recoil'
import { Colors, CenterGreenOval } from '../Components/styles'
import weekplanstate from '../Recoil/weekplanstate'

// Colors
const { primary, white, grey, black } = Colors

const PlanDetails = ({ navigation }) => {
  const [weekplan, setweekplan] = useRecoilState(weekplanstate)
  const today = new Date().getDate()
  const [loadarr, setloadarr] = React.useState([] as number[])
  const [recipe, setrecipe] = React.useState('')

  const getName = () => {
    console.log(weekplan.selectedMeal)
    switch (weekplan.selectedDish) {
      case 1:
        return weekplan.meals[
          (weekplan.selectedDay - today) * 3 + weekplan.selectedMeal
        ].entree
      case 2:
        return weekplan.meals[
          (weekplan.selectedDay - today) * 3 + weekplan.selectedMeal
        ].side
      case 3:
        return weekplan.meals[
          (weekplan.selectedDay - today) * 3 + weekplan.selectedMeal
        ].fruits
      default:
        return weekplan.meals[
          (weekplan.selectedDay - today) * 3 + weekplan.selectedMeal + 1
        ].entree
    }
  }

  const getImageId = useCallback(() => {
    switch (weekplan.selectedDish) {
      case 1:
        return (
          ((weekplan.selectedDay - today) * 3 + weekplan.selectedMeal) * 3 +
          weekplan.selectedDish -
          1
        )
      case 2:
        return (
          ((weekplan.selectedDay - today) * 3 + weekplan.selectedMeal) * 3 +
          weekplan.selectedDish -
          1
        )
      case 3:
        return (
          ((weekplan.selectedDay - today) * 3 + weekplan.selectedMeal) * 3 +
          weekplan.selectedDish -
          1
        )
      default:
        return (
          ((weekplan.selectedDay - today) * 3 + weekplan.selectedMeal + 1) * 3 +
          weekplan.selectedDish -
          1
        )
    }
  }, [weekplan.selectedDay, weekplan.selectedMeal, weekplan.selectedDish])

  useEffect(() => {
    setrecipe('')
    var id = getImageId()

    fetch('https://asrx.ngrok.io/recipe?id=' + id.toString())
      .then((response) => response.json())
      .then((data) => {
        console.log(data.recipe)
        setrecipe(data.recipe)
      })
  }, [getImageId])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: grey,
        paddingTop: 120,
        //marginTop: 30,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 2,
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          borderRightWidth: 1,
          borderColor: white,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: white,
            borderBottomWidth: 1,
            width: '100%',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setweekplan({ ...weekplan, selectedDish: 1 })
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: weekplan.selectedDish == 1 ? primary : white,
                textAlign: 'center',
              }}
            >
              Entreé{' '}
            </Text>
            <MaterialCommunityIcons
              name="leaf"
              size={20}
              color={primary}
              style={{ opacity: weekplan.selectedDish == 1 ? 100 : 0 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: white,
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setweekplan({ ...weekplan, selectedDish: 2 })
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: weekplan.selectedDish == 2 ? primary : white,
                textAlign: 'center',
              }}
            >
              Side{' '}
            </Text>
            <MaterialCommunityIcons
              name="leaf"
              size={20}
              color={primary}
              style={{ opacity: weekplan.selectedDish == 2 ? 100 : 0 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setweekplan({ ...weekplan, selectedDish: 3 })
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: weekplan.selectedDish == 3 ? primary : white,
                textAlign: 'center',
              }}
            >
              Fruits{' '}
            </Text>
            <MaterialCommunityIcons
              name="leaf"
              size={20}
              color={primary}
              style={{ opacity: weekplan.selectedDish == 3 ? 100 : 0 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'center',
          backgroundColor: grey,
          alignItems: 'center',
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}
          contentContainerStyle={{
            alignContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 400,
              width: '100%',
              justifyContent: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: white,
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              {getName()}
            </Text>

            <View
              style={{
                display: loadarr.includes(getImageId()) ? 'none' : 'flex',
                height: '30%',
              }}
            />

            <ActivityIndicator
              style={{
                display: loadarr.includes(getImageId()) ? 'none' : 'flex',
                zIndex: 2,
              }}
            />

            <Image
              source={{
                uri:
                  'https://asrx.ngrok.io/image?id=' + getImageId().toString(),
              }}
              resizeMode="cover"
              onLoadEnd={() => {
                setloadarr((prevState) => {
                  if (prevState.includes(getImageId())) {
                    return prevState
                  }
                  return [...prevState, getImageId()]
                })
              }}
              style={{
                width: !loadarr.includes(getImageId()) ? 1 : '100%',
                height: !loadarr.includes(getImageId()) ? 1 : '70%',
              }}
            />
          </View>
          {recipe.length > 0 ? (
            <Text
              style={{
                marginTop: -20,
                fontSize: 20,
                color: white,
              }}
            >
              {recipe.replace('&#39;', '')}
            </Text>
          ) : (
            <ActivityIndicator />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default PlanDetails
