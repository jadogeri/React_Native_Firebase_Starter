import React from 'react'
import { StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const NavText = (props) => {
    const navigation = useNavigation();

  return (
    <Pressable testID={props.pressTestID} onPress={()=>{navigation.navigate(props.routeName,{email: props.email})}}>
    <Text testID={props.textTestID} style={props.textStyle}>
    {props.title}
  </Text>
  </Pressable>
  )
}

export default NavText

const styles = StyleSheet.create({})