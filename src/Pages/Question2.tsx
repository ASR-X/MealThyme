import React from 'react'
import { StatusBar, View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native'

import { MainRoutes } from '../Navigators/routes'
import {
  Colors,
  SplashButtonView,
  SplashFooter,
  QuestionHeaderView,
  QuestionNextButton,
  QuestionPrevButton,
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

import userstate from '../Recoil/userstate'
import { useRecoilState } from 'recoil'

const { primary, white, grey, black } = Colors

export const Question2 = ({ navigation }): React.ReactElement => {
  const [weight, onChangeWeight] = React.useState(null)
  const [feet, onChangeFeet] = React.useState(null)
  const [inches, onChangeInches] = React.useState(null)
  const [age, onChangeAge] = React.useState(null)

  const [user, setuserattri] = useRecoilState(userstate);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: grey}}>
        <StatusBar barStyle="light-content" />
        <QuestionHeaderView />
        <Animatable.View style={styles.footer}>
          <View style={{ flex: 1}}>
            <QuestionTitle>Height (Feet)</QuestionTitle>
            <TextInput
              selectionColor={primary}
              style={styles.textInput}
              onChangeText={onChangeFeet}
              placeholder="5"
              keyboardType="numeric"
            />
             <QuestionTitle>Height (Inches)</QuestionTitle>
            <TextInput
              selectionColor={primary}
              style={styles.textInput}
              onChangeText={onChangeInches}
              placeholder="6"
              keyboardType="numeric"
            />
            <QuestionTitle>Weight (Pounds)</QuestionTitle>
            <TextInput
              selectionColor={primary}
              style={styles.textInput}
              onChangeText={onChangeWeight}
              placeholder="130"
              keyboardType="numeric"
            />
            <QuestionTitle>Age</QuestionTitle>
            <TextInput
              selectionColor={primary}
              style={styles.textInput}
              onChangeText={onChangeAge}
              placeholder="18"
              keyboardType="numeric"
            />
          </View>
          <QuestionNextButton
            onPress={() => {
              if (feet && inches && weight) {
                setuserattri({height: feet + '\'' + inches, weight: weight, age: age});
                navigation.navigate(MainRoutes.Question3);
              }
            }} >
            <MaterialIcons name="navigate-next" color={primary} size={45} />
           </QuestionNextButton>
          <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question1)
          }}
          >
          <MaterialIcons name="navigate-before" color={primary} size={45} />
          </QuestionPrevButton>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: 20,
    marginBottom: 30,
    width: 50, // Add this to specify bottom border color
    borderBottomWidth: 3, // Add this to specify bottom border thickness
  },
})