import React, { memo, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import InputField from "../InputField";
import { textInputChange } from "../../helpers/textInputChange";
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";
import NavButton from "../NavButton";

const handleReset = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("success");
      alert("success")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error has occured: ", errorCode, errorMessage);
    });
};
const ForgotPasswordForm = memo(() => {
  const [value, setValue] = useState({email : ""} );

  return (
    <View style={[styles.board, styles.boardLayout]}>
      <View style={[styles.boardContainer, styles.boardLayout]} />
     
      <NavButton buttonStyle={[styles.getStartedButton, styles.mailFlexBox]}
        textStyle={styles.getStarted} title="Send Code"
        onPress={()=>{handleReset(value.email)}}
      />
      <View style={styles.content}>
        <View style={styles.forgotPasswordParent}>
          <Text style={[styles.forgotPassword, styles.emailOrPhoneClr]}>
            Forgot Password
          </Text>
          <Text style={[styles.enterYourEmail, styles.emailTypo]}>
            Enter your email to reset password
          </Text>
        </View>
        <View style={styles.email}>
          <Text style={[styles.emailOrPhone, styles.emailTypo]}>
            Email 
          </Text>
          
          <InputField label="Your Email" inputFieldStyle={[styles.mailFlexBox]} onChangeText={(input) => { textInputChange(input, value.email,setValue) }}
            leftIcon="email" leftIconColor={value.email.length !== 0 ?"blue": "black"} textColor={value.email.length !== 0 ?"blue": "black"} 
            leftIconStyle={{left:-5 }} iconStyle={styles.icbaselineEmailIcon}
            
            />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  boardLayout: {
    height: 364,
    width: 360,
    left: 0,
    position: "absolute",
  },
  mailFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    width: 300,
  },
  emailOrPhoneClr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  emailTypo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  boardContainer: {
    top: 0,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  getStartedButton: {
    top: 273,
    left: 30,
    height: 41,
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  forgotPassword: {
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  enterYourEmail: {
    color: Color.colorDarkgray_100,
    textAlign: "center",
    marginTop: 16,
    width: 300,
    fontSize: FontSize.size_sm,
  },
  forgotPasswordParent: {
    alignItems: "center",
  },
  emailOrPhone: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  abcdefghijkgmailcom: {
    marginLeft: 12,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  mail: {
    backgroundColor: Color.colorWhitesmoke,
    height: 50,
    padding: Padding.p_smi,
    marginTop: 4,
    alignItems: "center",
  },
  email: {
    marginTop: 24,
    justifyContent: "center",
  },
  content: {
    top: 63,
    left: 27,
    height: 160,
    position: "absolute",
  },
  board: {
    top: 436,
  },
});

export default ForgotPasswordForm;
