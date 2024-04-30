import {Image, View } from 'react-native'
import React from 'react'

const HexImage = (props) => {
  return (
    <View style={props.containerStyle}>
    <Image
      style={props.imageStyle}
      contentFit="cover"
      source={props.source}
    />
  </View>
  )
}

export default HexImage

