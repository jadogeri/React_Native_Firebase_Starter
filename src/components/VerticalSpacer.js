import {  View } from 'react-native'
import React from 'react'

const VerticalSpacer = ({marginLeft, marginRight, testID}) => {
  return (
    <View testID={testID} style={{marginLeft : marginLeft,marginRight: marginRight}}>
    </View>
  )
}

export default VerticalSpacer

