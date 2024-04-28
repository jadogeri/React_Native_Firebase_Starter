import  React , { useState }from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";
import IPhoneWithNotch from "../../components/IPhoneWithNotch";
import { Color, FontFamily, FontSize, Padding, Border } from "../../../GlobalStyles";
import { useRoute } from "@react-navigation/core";
import InputField from "../../components/InputField";
import { textInputChange } from "../../helpers/textInputChange";

const LoginForgotPassword = () => {
  
  return (
    <View style={styles.loginForgotPassword}>
      <View style={styles.registerContent}>
       
       
      </View>
      <ForgotPasswordForm />
      <View style={styles.email}>
          <Text style={[styles.emailOrPhone, styles.emailTypo]}>
            Email 
          </Text>
          <View style={styles.action}>        
         
          </View>         
        </View>

      {/* <IPhoneWithNotch /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mailSpaceBlock: {
    marginTop: 4,
    width: 300,
  },
  emailOrPhoneTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.6,
    fontSize: FontSize.size_sm,
  },
  getStartedButtonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  orUseSocialTypo: {
    fontFamily: FontFamily.rajdhaniRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  continueLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    flexDirection: "row",
    height: 50,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  abcdefghijkgmailcom: {
    marginLeft: 12,
  },
  mail: {
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  email: {
    justifyContent: "center",
  },
  icbaselineEmailIcon2: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail1: {
    justifyContent: "space-between",
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.colorDeepskyblue_100,
    textAlign: "right",
    marginTop: 4,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.6,
  },
  password: {
    marginTop: 24,
    justifyContent: "center",
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.rajdhaniSemiBold,
    color: Color.colorWhite,
  },
  getStartedButton: {
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    marginTop: 24,
    height: 50,
    width: 300,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  orUseSocial: {
    marginTop: 24,
    color: Color.colorGray_100,
  },
  icbaselineEmailIcon3: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  continueWithGoogle1: {
    color: Color.colorBlack,
    marginLeft: 16,
  },
  continueWithTwitter: {
    marginTop: 16,
  },
  continueWithSocial: {
    marginTop: 24,
  },
  registerContent: {
    top: 145,
    left: 30,
    alignItems: "center",
    position: "absolute",
  },
  signIn: {
    top: 81,
    left: 154,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    letterSpacing: -0.6,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  mask: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_200,
    width: 360,
    position: "absolute",
    height: 800,
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  loginForgotPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default LoginForgotPassword;
