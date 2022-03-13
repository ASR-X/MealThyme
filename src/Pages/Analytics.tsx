import React, { useState, useEffect } from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import CalendarHeatmap from 'react-native-calendar-heatmap'
//Data
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
//Components
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  StatusBar,
} from 'react-native'

import {
  Colors,
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit'
//Slider
import VerticalSwiper from '../Components/VerticalSwiper'

// Colors
const { primary, white, grey, black } = Colors
import { Dimensions } from "react-native";
import { ActivityIndicator } from 'react-native-paper'
import { DEFAULT_X_LABELS_HEIGHT_PERCENTAGE } from 'react-native-chart-kit/dist/AbstractChart'

const Analytics = ({ navigation }): React.ReactElement => {

  const screenWidth = Dimensions.get("window").width;

  const [ allgraphs, setallgraphs ] = useState([])
  const [loading, setloading] = useState(true)

  const stable = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const data = async(color) => {
    return fetch('https://asrx.ngrok.io/statistics/').then(async(response) => {
      const response_ser = await response.json()
      var lbels = new Array(21).fill(0)
      var treturn = {
        labels: lbels.map((x, i) => i),
        datasets: [
        {
          data: response_ser.stat.map((_, i) => parseInt(response_ser.stat[i])),
          color: () => color,
        }
      ]
      }
      return treturn
    })
  }

  const fetchdata = async() => {
    var alldata = []
    alldata.push(await data(primary))
    alldata.push(await data('#E77474'))
    alldata.push(await data('#e7d874'))
    alldata.push(await data('#747ee7'))
    alldata.push(await data('#b074e7'))
    setallgraphs(alldata)
    setloading(false)
  }


  useEffect( () => {
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
    }
    }
  };

  console.log(allgraphs[0])
  
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: grey,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
      //marginTop: 30,
    }}>
      <StatusBar barStyle="light-content" />
      {
        loading ? <ActivityIndicator size="large" color={primary} /> :
      
      <ScrollView style={{
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,

      }} > 
          <Text style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: primary,}}>
              Meal Consistency
          </Text>
          <LineChart
            data={allgraphs[0] ? allgraphs[0] : stable}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig(white)}
            withInnerLines= {false} // optional
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

      <Text style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: "#E77474",}}>
              BMI
          </Text>
          <LineChart
            data={allgraphs[1] ? allgraphs[1] : stable}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig(white)}
            withInnerLines= {false} // optional
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
          <Text style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: '#e7d874',}}>
              Vitamin B
          </Text>
          <LineChart
            data={allgraphs[2] ? allgraphs[2] : stable}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig(white)}
            withShadow={false}
            withInnerLines= {false} // optional
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
          <Text style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: '#747ee7',}}>
              Vitamin C
          </Text>
          <LineChart
            data={allgraphs[3] ? allgraphs[3] :stable}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig(white)}
            withInnerLines= {false} // optional
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
    </ScrollView>
}
    </View>
  )
}

export default Analytics
