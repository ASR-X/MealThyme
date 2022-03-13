import React from 'react'
import {
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
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
  iosStyles,
} from '../Components/styles'

import * as Animatable from 'react-native-animatable'
import { MultipleChoice } from '../Components/MultipleChoice'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent } from 'styled-system'
import { useRecoilState } from 'recoil'
import userstate from '../Recoil/userstate'
import { Slider } from '@miblanchard/react-native-slider'

const { primary, white, grey, black } = Colors

export const Question3 = ({ navigation }): React.ReactElement => {
  const [activity, setactivity] = React.useState(1)
  const [spice, setspice] = React.useState(1)
  const [vegetarian, setvegeterian] = React.useState(0)
  const [sweet, setsweet] = React.useState(1)

  const [user, setuserattri] = useRecoilState(userstate)

  return (
    <View style={{ flex: 1, backgroundColor: grey }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer}>
        <QuestionTitle>Activity Level</QuestionTitle>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Slider
            animateTransitions
            maximumTrackTintColor={white}
            minimumTrackTintColor={primary}
            thumbStyle={iosStyles.thumb}
            trackStyle={iosStyles.track}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={activity ? activity : 1}
            trackClickable={true}
            onValueChange={(value) => {
              setactivity(value[0])
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ color: primary }}>1</Text>
            <Text style={{ color: primary }}>10</Text>
          </View>
        </View>

        <QuestionTitle>Spice Tolerance</QuestionTitle>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Slider
            animateTransitions
            maximumTrackTintColor={white}
            minimumTrackTintColor={primary}
            thumbStyle={iosStyles.thumb}
            trackStyle={iosStyles.track}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={spice ? spice : 1}
            trackClickable={true}
            onValueChange={(value) => {
              setspice(value[0])
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ color: primary }}>1</Text>
            <Text style={{ color: primary }}>5</Text>
          </View>
        </View>

        <QuestionTitle>Vegeterian</QuestionTitle>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Slider
            animateTransitions
            maximumTrackTintColor={white}
            minimumTrackTintColor={primary}
            thumbStyle={iosStyles.thumb}
            trackStyle={iosStyles.track}
            minimumValue={0}
            maximumValue={1}
            step={1}
            value={vegetarian ? vegetarian : 0}
            trackClickable={true}
            onValueChange={(value) => {
              setvegeterian(value[0])
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ color: primary }}>0</Text>
            <Text style={{ color: primary }}>1</Text>
          </View>
        </View>

        <QuestionTitle>Sugar Tolerance</QuestionTitle>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Slider
            animateTransitions
            maximumTrackTintColor={white}
            minimumTrackTintColor={primary}
            thumbStyle={iosStyles.thumb}
            trackStyle={iosStyles.track}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={sweet ? sweet : 1}
            trackClickable={true}
            onValueChange={(value) => {
              setsweet(value[0])
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ color: primary }}>1</Text>
            <Text style={{ color: primary }}>5</Text>
          </View>
        </View>

        <QuestionNextButton
          onPress={() => {
            var questions = []
            questions.push(spice.toString())
            questions.push(vegetarian.toString())
            questions.push(sweet.toString())
            questions.push(activity.toString())
            console.log(questions)
            setuserattri({ questions: questions })
            navigation.navigate(MainRoutes.Question4)
          }}
        >
          <MaterialIcons name="navigate-next" color={primary} size={45} />
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question2)
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
    paddingHorizontal: 20,
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
