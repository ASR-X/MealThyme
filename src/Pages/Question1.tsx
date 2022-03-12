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
  const [age, onChangeAge] = React.useState(null)
  

  const [userstateage, setuserstateage] = useRecoilState(userstate);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: white }}>
        <StatusBar barStyle="light-content" />
        <QuestionHeaderView />
        <Animatable.View style={styles.footer}>
          <View style={{ flex: 1 }}>
            <QuestionTitle>Age</QuestionTitle>
            <TextInput
              selectionColor={white}
              style={styles.textInput}
              onChangeText={onChangeAge}
              placeholder="18"
              keyboardType="numeric"
            />
          </View>
          <QuestionNextButton
            onPress={() => {
              if (age) {
                setuserstateage({age: age})
                navigation.navigate(MainRoutes.Question2)
              }
            }}
          >
            <MaterialIcons name="navigate-next" color={white} size={45} />
          </QuestionNextButton>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
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
