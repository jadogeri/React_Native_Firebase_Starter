import { TextInput } from 'react-native-paper'
import React from 'react'

const InputField = (props) => {
  return (
    <TextInput 
      placeholder={props.placeholder} style={props.inputFieldStyle} 
      label={props.label} textColor={props.textColor}
      autoCapitalize="none" secureTextEntry={props.secureTextEntry} 
      onChangeText={props.onChangeText} activeOutlineColor='purple' value={props.value}
      left={<TextInput.Icon icon={props.leftIcon} color={props.leftIconColor} size={props.leftSize}  style={props.leftIconStyle} />}
      right={<TextInput.Icon icon={props.rightIcon} color={props.rightIconColor} size={props.rightSize}  style={props.righttIconStyle} onPress={props.eyePressHandler}/>}

    />
  )
}

export default InputField
