import React, { useState } from 'react'

import { FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRecoilState } from 'recoil'
import { marginBottom } from 'styled-system'
import userstate from '../Recoil/userstate'

import { QuestionText, Colors } from './styles'

const { primary, white, black } = Colors

const Item = ({ item, selected, onPress }): React.ReactElement<any> => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      {selected ? (
        <MaterialIcons name="check-box" color={primary} size={18} />
      ) : (
        <MaterialIcons
          name="check-box-outline-blank"
          color={primary}
          size={18}
        />
      )}
      <QuestionText style={{ fontSize: 18 }}>{item.title}</QuestionText>
    </TouchableOpacity>
  )
}

export const BoxChoice = ({ props, num }): React.ReactElement<any> => {
  const [selectedId, setSelectedId] = useState([])
  const [user, setuser] = useRecoilState(userstate)

  const renderItem = ({ item }) => {
    const selected = selectedId.includes(item.id)
    return (
      <Item
        item={item}
        selected={selected}
        onPress={() => {
          if (selectedId.includes(item.id)) {
            setuser({
              [num]: selectedId.filter((id) => id !== item.id),
            })
            setSelectedId(selectedId.filter((id) => id !== item.id))
          } else {
            setuser({ [num]: selectedId.concat(item.id) })
            setSelectedId(selectedId.concat(item.id))
          }
        }}
      />
    )
  }

  return (
    <FlatList
      data={props}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    width: '100%',
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
