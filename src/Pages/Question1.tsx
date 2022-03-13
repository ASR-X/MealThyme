import React from 'react'
import {
  StatusBar,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'

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
} from '../Components/styles'

import * as Animatable from 'react-native-animatable'
import { MultipleChoice } from '../Components/MultipleChoice'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent } from 'styled-system'
import { selector, useRecoilState } from 'recoil'

import { Keyboard } from 'react-native'
import userstate from '../Recoil/userstate'

const { primary, white, grey, black } = Colors

export const Question1 = ({ navigation }): React.ReactElement => {
  const [user, setuser] = useRecoilState(userstate)

  const answers = [
    {
      id: '1',
      title: 'Male',
    },
    {
      id: '2',
      title: 'Female',
    },
    {
      id: '3',
      title: 'Non-Binary',
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: grey }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer}>
        <QuestionTitle>Gender</QuestionTitle>
        <MultipleChoice props={answers} num={'gender'} />
        <QuestionNextButton
          onPress={() => {
            if (user.gender) navigation.navigate(MainRoutes.Question2)
          }}
        >
          <MaterialIcons name="navigate-next" color={primary} size={45} />
        </QuestionNextButton>
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
    paddingHorizontal: 20,
  },
  textInput: {
    color: primary,
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomColor: primary,
    marginTop: 30,
    width: 50, // Add this to specify bottom border color
    borderBottomWidth: 3, // Add this to specify bottom border thickness
  },
})
