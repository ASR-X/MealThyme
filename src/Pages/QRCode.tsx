import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { MainRoutes } from '../Navigators/routes'

//Components
import {
  Colors,
  Avatar,
  UserInfoSection,
  StyledTitle,
  Caption,
  Row,
  InfoBoxWrapper,
  InfoBox,
  CategoryButtonText,
  MenuWrapper,
  MenuItem,
  MenuItemText,
} from '../Components/styles'
import { Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

const QRCode = ({ navigation }): React.ReactElement => {
  return (
    <View style={{ backgroundColor: grey, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../Assets/QRCode.png')}
          style={{ height: 300, width: 300 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 15,
            marginTop: 10,
            color: primary,
          }}
        >
          Scan with Companion Therapist App
        </Text>
      </View>
    </View>
  )
}

export default QRCode
