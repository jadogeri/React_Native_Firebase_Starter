import { Text, View , Image, Pressable} from 'react-native'
import React from 'react'

const SocialAccountButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={props.containerStyle}>
        <Image
          style={props.imageStyle}
          contentFit="cover"
          source={props.source}
        />
        <Text style={props.textStyle}>
          {props.title} 
        </Text>
      </View>
    </Pressable>
  )
}

export default SocialAccountButton

