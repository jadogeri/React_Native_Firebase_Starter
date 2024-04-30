import { StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const NavButton = (props) => {
    const navigation = useNavigation();

  return (
    <Pressable onPress={props.onPress}
    //onPress={()=>{navigation.navigate(props.routeName)}}
    >
    <LinearGradient
        style={props.buttonStyle}
        locations={[0, 0.27, 0.56, 0.83]}
        colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
      >
        <Text style={props.textStyle}>{props.title}</Text>
      </LinearGradient>
      </Pressable>
  )
}

export default NavButton

const styles = StyleSheet.create({})