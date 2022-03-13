import React, { useEffect, useState } from 'react'
import { StatusBar, Text, View, StyleSheet } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider'

import { MainRoutes } from '../Navigators/routes'
import {
  Colors,
  SplashButtonView,
  SplashFooter,
  QuestionHeaderView,
  QuestionNextButton,
  SplashLogo,
  QuestionTitle,
  QuestionText,
  SplashTextSign,
  StyledButton,
  QuestionPrevButton,
  iosStyles,
} from '../Components/styles'

import * as Animatable from 'react-native-animatable'
import { MultipleChoice } from '../Components/MultipleChoice'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent } from 'styled-system'
import { useRecoilState } from 'recoil'
import userstate from '../Recoil/userstate'
import { BoxChoice } from '../Components/BoxChoice'
import { ActivityIndicator } from 'react-native-paper'
import weekplanstate from '../Recoil/weekplanstate'

const { primary, white, grey, black } = Colors

export const Question4 = ({ navigation }): React.ReactElement => {
  const [user, setuser] = useRecoilState(userstate)
  const [weekplan, setweekplan] = useRecoilState(weekplanstate)
  const [loading, setLoading] = useState(false)

  const answers = [
    {
      id: '1',
      title: 'Tree Nut',
    },
    {
      id: '2',
      title: 'Soy',
    },
    {
      id: '3',
      title: 'Fish',
    },
    {
      id: '4',
      title: 'Peanuts',
    },
    {
      id: '5',
      title: 'Shellfish',
    },
    {
      id: '6',
      title: 'Eggs',
    },
    {
      id: '7',
      title: 'Wheat',
    },
    {
      id: '8',
      title: 'Dairy',
    },
  ]

  const getMeals = async () => {
    if (loading) {
      let { complete, allergies, ...newdata } = user
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newdata),
      }
      fetch('https://asrx.ngrok.io/getMeals', requestOptions)
        .then(async (response) => {
          const response_ser = await response.json()
          var meals = []
          for (let i = 0; i < response_ser.meals.length; i += 3) {
            var meal = {
              entree: response_ser.meals[i],
              side: response_ser.meals[i + 1],
              fruits: response_ser.meals[i + 2],
            }
            meals.push(meal)
          }
          var completedMeals = new Array(meals.length / 3).fill(0)
          setweekplan({
            ...weekplan,
            meals: meals,
            completedMeals: completedMeals,
          })
          setuser({ completed: true })
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
  useEffect(() => {
    getMeals()
  }, [loading])

  return (
    <View style={{ flex: 1, backgroundColor: grey }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer}>
        <QuestionTitle>Allergies & Dietary Restrictions</QuestionTitle>
        <BoxChoice props={answers} num={'allergies'} />
        <QuestionNextButton
          onPress={async () => {
            var rindex = new Array(8).fill('0')
            for (let i = 0; i < user.allergies.length; i++) {
              rindex[parseInt(user.allergies[i]) - 1] = '1'
            }
            setuser({ questions: [...user.questions, ...rindex] })

            setLoading(true)
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color={primary} />
          ) : (
            <MaterialIcons name="navigate-next" color={primary} size={45} />
          )}
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question3)
          }}
        >
          <MaterialIcons name="navigate-before" color={primary} size={45} />
        </QuestionPrevButton>
      </Animatable.View>
    </View>
  )
}
const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: grey,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingTop: 20,
    paddingBottom: 140,
    paddingHorizontal: 15,
  },
  textInput: {
    color: primary,
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomColor: primary,
    marginTop: 20,
    width: 60, // Add this to specify bottom border color
    borderBottomWidth: 3, // Add this to specify bottom border thickness
    marginBottom: 50,
  },
})
