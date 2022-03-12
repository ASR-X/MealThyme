import React, { useState } from 'react'

import { FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import userstate from '../Recoil/userstate'
import { useRecoilState } from 'recoil'

import { QuestionText, Colors } from './styles'

const { primary, tertiary, white, black } = Colors

const Item = ({ item, selected, onPress }): React.ReactElement<any> => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      {selected ? (
        <FontAwesome name="circle" color={white} size={13} />
      ) : (
        <FontAwesome name="circle-o" color={white} size={13} />
      )}
      <QuestionText>{item.title}</QuestionText>
    </TouchableOpacity>
  )
}

export const MultipleChoice = ({ props, num }): React.ReactElement<any> => {
  const [selectedId, setSelectedId] = useState(null)
  const [user, setuser] = useRecoilState(userstate);

  const renderItem = ({ item }) => {
    const selected = item.id === selectedId ? true : false
    return (
      <Item
        item={item}
        selected={selected}
        onPress={() => {
          setSelectedId(item.id)
          setuser({ [num]: item.id })
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
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
