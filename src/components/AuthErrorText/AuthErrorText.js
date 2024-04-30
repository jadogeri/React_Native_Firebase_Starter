import { Text } from 'react-native'
import React from 'react'

const AuthErrorText = (props) => {
  return (
    <Text style={props.style}>
          {props.title}
    </Text>
  )
}

export default AuthErrorText

