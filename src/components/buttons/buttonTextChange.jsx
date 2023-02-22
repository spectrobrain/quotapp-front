import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const buttonTextChange = (props) => {
    
    const {Text} = props 
  return (
    <TouchableOpacity>
      <Text>buttonTextChange</Text>
    </TouchableOpacity>
  )
}

export default buttonTextChange