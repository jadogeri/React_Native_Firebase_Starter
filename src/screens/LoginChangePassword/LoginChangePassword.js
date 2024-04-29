import  React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Password from "../../components/Password";
import IPhoneWithNotch from "../../components/IPhoneWithNotch";
import { Color, FontFamily, FontSize, Padding, Border } from "../../../GlobalStyles";
import InputField from "../../components/InputField";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import LoginForm from "../../components/LoginForm/LoginForm";
import { passwordChangeHandler } from "../../helpers/passwordChangeHandler";
import { confirmPasswordChangeHandler } from "../../helpers/confirmPasswordChangeHandler";
import {newPasswordChangeHandler} from "../../helpers/newPasswordChangeHandler"
import { updateSecureEntry } from "../../helpers/updateSecureEntry";
import { updateNewSecureEntry } from "../../helpers/updateNewSecureEntry";
import { updateConfirmSecureEntry } from "../../helpers/updateConfirmSecureEntry";
import { textInputChange } from "../../helpers/textInputChange";
import NavButton from "../../components/NavButton";
import HorizontalSpacer from "../../components/HorizontalSpacer"

let defaultData = { email: '', password: '',newPassword: '',confirmPassword: '', username: '', secureTextEntry: true, check_textInputChange: false,
newSecureTextEntry: true,confirmSecureTextEntry: true, check_textInputChange: false, hash: '' }
const LoginChangePassword = () => {
  const auth = getAuth();
  const navigation = useNavigation();
  const [data, setData] = useState(defaultData)
  const [user, setUser] = useState({});
  return (

    <View style={[styles.loginChangePassword]}>
 
      <View style={[styles.board, styles.boardLayout,{top:90}]}>
        <View style={[styles.boardContainer, styles.boardLayout]} />
  
        
        {/* <LoginForm /> */}

        <View style={styles.resetPasswordParent}>
            <Text style={[styles.resetPassword, styles.signInTypo,{top:-20}]}>
              Reset Password
            </Text>
           
          </View>

        <Text style={{bottom:-22}}>Email</Text>

      <InputField leftIcon="email" onChangeText={(input) => { textInputChange(input,data,setData) }}
      leftIconColor={data.email.length > 8 ?"blue": "black"}  textColor={data.email.length > 8 ?"blue": "black"} 
      leftIconStyle={{left:-5 }} inputFieldStyle={styles.password} label="Enter email"
      />
      <Text style={[styles.password1, styles.textTypo]}>Current Password</Text>

      <InputField leftIcon="lock" textColor={data.password.length > 8 ?"blue": "black"}
          rightIcon={data.secureTextEntry?"eye-off" : "eye"} label="Enter current password"
          eyePressHandler={()=>updateSecureEntry(data,setData)} secureTextEntry={data.secureTextEntry}
          onChangeText={(input) => { passwordChangeHandler(input,data,setData) }}
          leftIconColor={data.password.length > 8 ?"blue": "black"}  
          />
        <Text style={[styles.password1, styles.textTypo]}>New Password</Text>

        <InputField leftIcon="lock" textColor={data.newPassword.length > 8 ?"blue": "black"}
        rightIcon={data.newSecureTextEntry?"eye-off" : "eye"} label="Enter new password"
        eyePressHandler={()=>updateNewSecureEntry(data,setData)} secureTextEntry={data.newSecureTextEntry}
        onChangeText={(input) => { newPasswordChangeHandler(input,data,setData) }}
        leftIconColor={data.newPassword.length > 8 ?"blue": "black"}  
        />
        <Text style={[styles.password1, styles.textTypo]}>confirm Password</Text>

        <InputField leftIcon="lock" textColor={data.confirmPassword.length > 8 ?"blue": "black"}
        rightIcon={data.confirmSecureTextEntry?"eye-off" : "eye"} label="Enter confirm password"
        eyePressHandler={()=>updateConfirmSecureEntry(data,setData)} secureTextEntry={data.confirmSecureTextEntry}
        onChangeText={(input) => { confirmPasswordChangeHandler(input,data,setData) }}
        leftIconColor={data.confirmPassword.length > 8 ?"blue": "black"}  
        />
               


        {/* 





     











{/* 
        <View style={styles.password}>
      <Text style={[styles.password1, styles.textTypo]}></Text>
      <View style={[styles.mail, styles.mailFlexBox]}>
        <View style={styles.mailFlexBox}>
          <Image
            style={styles.icbaselineEmailIcon}
            contentFit="cover"
           // source={require("../../assets/icbaselineemail8.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>*************</Text>
        </View>
        <Image
          style={styles.icbaselineEmailIcon1}
          contentFit="cover"
          //source={require("../../assets/icbaselineemail2.png")}
        />
      </View>
    </View>
 */}


       <View style={styles.content}>
         



          <NavButton buttonStyle={[styles.getStartedButton1, styles.getFlexBox,{top:320}]} 
          textStyle={[styles.getStarted1, styles.getTypo]} title="Reset Password" onPress={()=> {alert("pressed")}}/>


          
       
        </View>
      </View>
    
      {/* <IPhoneWithNotch /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  registerContentPosition: {
    left: 30,
    position: "absolute",
  },
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
  getFlexBox: {
    backgroundColor: "transparent",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_104xl,
    flexDirection: "row",
    width: 300,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  getTypo: {
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  orUseSocialTypo: {
    fontFamily: FontFamily.rajdhaniRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  continueSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    flexDirection: "row",
    height: 50,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  youCanChangeSpaceBlock: {
    marginTop: 16,
    width: 300,
  },
  signInTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  boardLayout: {
    height: 456,
    width: 360,
    left: 0,
    position: "absolute",
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
    borderRadius: Border.br_3xs,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  email: {
    justifyContent: "center",
  },
  icbaselineEmailParent: {
    flexDirection: "row",
    alignItems: "center",
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
    borderRadius: Border.br_3xs,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.colorDeepskyblue_100,
    textAlign: "right",
    marginTop: 4,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.6,
    fontSize: FontSize.size_sm,
  },
  password: {
    marginTop: 24,
    justifyContent: "center",
  },
  getStarted: {
    fontFamily: FontFamily.rajdhaniSemiBold,
  },
  getStartedButton: {
    marginTop: 24,
    height: 50,
    backgroundColor: "transparent",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_104xl,
  },
  orUseSocial: {
    marginTop: 24,
    color: Color.colorGray_100,
    fontFamily: FontFamily.rajdhaniRegular,
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
  continueWithGoogle: {
    width: 300,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
  },
  continueWithTwitter: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    flexDirection: "row",
    height: 50,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  continueWithSocial: {
    marginTop: 24,
  },
  registerContent: {
    top: 145,
    alignItems: "center",
  },
  signIn: {
    top: 81,
    left: 154,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.6,
    fontWeight: "500",
    position: "absolute",
  },
  mask: {
    backgroundColor: Color.colorGray_200,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  boardContainer: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    top: 0,
    height: 456,
    backgroundColor: Color.colorWhite,
  },
  getStarted1: {
    fontFamily: FontFamily.urbanistSemiBold,
  },
  getStartedButton1: {
    top: 365,
    height: 41,
    left: 30,
    position: "absolute",
  },
  resetPassword: {
    fontFamily: FontFamily.urbanistMedium,
  },
  youCanChange: {
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    marginTop: 16,
  },
  resetPasswordParent: {
    alignItems: "center",
  },
  content: {
    top: 76,
    left: 27,
    height: 160,
    position: "absolute",
  },
  board: {
    top: 344,
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  loginChangePassword: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  mailFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  password1: {
    fontFamily: FontFamily.urbanistRegular,
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    letterSpacing: -0.6,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 12,
  },
  icbaselineEmailIcon1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 300,
    height: 50,
    justifyContent: "space-between",
    padding: Padding.p_smi,
    marginTop: 4,
  },
  password: {
    justifyContent: "center",
    marginTop: 24,
  },
});

export default LoginChangePassword;



/**
 * import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";

const Password = memo(({ passwordInput }) => {
  return (
    <View style={styles.password}>
      <Text style={[styles.password1, styles.textTypo]}>{passwordInput}</Text>
      <View style={[styles.mail, styles.mailFlexBox]}>
        <View style={styles.mailFlexBox}>
          <Image
            style={styles.icbaselineEmailIcon}
            contentFit="cover"
            source={require("../../assets/icbaselineemail8.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>*************</Text>
        </View>
        <Image
          style={styles.icbaselineEmailIcon1}
          contentFit="cover"
          source={require("../../assets/icbaselineemail2.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  mailFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  password1: {
    fontFamily: FontFamily.urbanistRegular,
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    letterSpacing: -0.6,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 12,
  },
  icbaselineEmailIcon1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 300,
    height: 50,
    justifyContent: "space-between",
    padding: Padding.p_smi,
    marginTop: 4,
  },
  password: {
    justifyContent: "center",
    marginTop: 24,
  },
});

export default Password;

 */