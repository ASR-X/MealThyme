import React, { useCallback, useEffect } from 'react'
import { ProgressRings } from '../Components/ProgressRings'
import { ChonseSelect } from 'react-native-chonse-select'
import {Patients} from '../Data/Patients'

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
  StatusBar,
} from 'react-native'

import { Colors } from '../Components/styles'

// Colors
const { primary, white, grey, black } = Colors

import { MainRoutes } from '../Navigators/routes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon } from 'react-native-elements'

// const Item = ({
//   item,
//   gender,
//   admin,
//   ldose,
//   onPress,
// }): React.ReactElement<any> => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={{
//         margin: 10,
//         padding: 10,
//         borderWidth: 2,
//         borderColor: primary,
//         borderRadius: 10,
//       }}
//     >
//       <View
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}
//       >
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 35,
//               color: primary,
//             }}
//           >
//             {item.name}
//           </Text>
//         </View>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 35,
//               color: primary,
//             }}
//           >
//             {item.prob}
//           </Text>
//         </View>
//       </View>

//       <View
//         style={{
//           marginTop: 10,
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flex: 2,
//           flexDirection: 'row',
//         }}
//       >
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             flex: 3,
//           }}
//         >
//           <Text style={{ fontSize: 15, color: primary }}>Age - {item.age}</Text>
//           <Text style={{ fontSize: 15, color: primary }}>
//             First Age - {item.firstAge}
//           </Text>
//         </View>
//         <View
//           style={{
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flex: 3,
//           }}
//         >
//           <Text style={{ fontSize: 15, color: primary }}>
//             Gender - {gender}
//           </Text>
//           <Text style={{ fontSize: 15, color: primary }}>Route - {admin}</Text>
//         </View>
//         <View
//           style={{
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flex: 3,
//           }}
//         >
//           <Text style={{ fontSize: 13.5, color: primary }}>Dose - {ldose}</Text>
//           <Text style={{ fontSize: 15, color: primary }}>
//             N. Drugs - {item.drugs.length}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   )
// }

const Home = ({ route, navigation }): React.ReactElement => {
  // const renderItem = ({ item }) => {
  //   var gender = ''
  //   var admin = ''
  //   var dose = ''
  //   if (item.gender === '1') gender = 'Male'
  //   else if (item.gender === '2') gender = 'Female'
  //   else gender = 'N/B'

  //   if (item.admin === '1') admin = 'Oral'
  //   else if (item.admin === '2') admin = 'Smoke'
  //   else if (item.admin === '3') admin = 'Inhale'
  //   else if (item.admin === '4') admin = 'Injection'

  //   var dates = item.dose.map((date) => new Date(date))
  //   var l_dose = dates.reduce(function (p, v) {
  //     return p > v ? p : v
  //   })

  //   const offset = l_dose.getTimezoneOffset()
  //   l_dose = new Date(l_dose.getTime() - offset * 60 * 1000)
  //   var s_date = l_dose.toISOString().split('T')[0]
  //   s_date = s_date.slice(2)

  //   return (
  //     <Item
  //       item={item}
  //       gender={gender}
  //       admin={admin}
  //       ldose={s_date}
  //       onPress={() => {
  //         navigation.navigate(MainRoutes.Dashboard, { patient: item })
  //       }}
  //     />
  //   )
  // }

  // console.log(route.params.Home)

  const PatientCard = ({item}): React.ReactElement => {
    console.log(item)
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate(MainRoutes.Dashboard, { patient: item})
      }}>
    <View style={{
      flexDirection: 'column',
      flex: 1,
      marginHorizontal: 12,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 12,
      marginVertical: 7,
      paddingVertical: 7,
      borderWidth: 1,
      borderColor: primary,
    }}>
     <View style={{
        flexDirection: "row",
        alignItems: 'center',
      }}>

        <View style={{
            marginHorizontal: 12,
            alignItems: 'left',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 2
          }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: '300',
                color: primary,
              }}
            >
              {item.name}
            </Text>
          </View>
          <Icon name="arrow-right" type="material" color={primary} />
      </View>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 12,
        paddingLeft:24,
        marginTop: 12,
      }}>
        <Text style={{ fontSize: 15, color: white }}>Age - {item.age}</Text>
        <Text style={{ fontSize: 15, color: white }}>Weight - {item.weight}lbs.</Text>
        <Text style={{ fontSize: 15, color: white }}>Gender - {item.gender}</Text>
      </View>
    </View>
  </TouchableOpacity>
    )}


  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: grey,
      //marginTop: 30,
    }}
  >
     
    <StatusBar barStyle="light-content" />


    <View style={{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 30,
      flex: 1
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        marginBottom: 5,
      }}>
        <Text style={{
          fontSize: 50,
          fontWeight: 'bold',
          color: primary,}}>
            Patients
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(MainRoutes.Plus)}
          style={{ marginHorizontal: 20, flex:1, alignItems: 'flex-end', justifyContent: 'center' }}
        >
          <Ionicons name={'add-outline'} size={30} color={primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={route.params.Home ? Patients : []}
        renderItem={PatientCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ justifyContent: 'flex-start', paddingBottom:20, marginTop: 20}} 
      />
    </View>

  </SafeAreaView>
  )
}

export default Home
