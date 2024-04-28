import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import IPhoneWithNotch from "../../components/IPhoneWithNotch";
import { Color, Padding, FontFamily, Border, FontSize } from "../../../GlobalStyles";
import SocialAccountButton from "../../components/SocialAccountButton";
import RegisterForm from "../../components/RegisterForm/RegisterForm"

const Register = () => {
  return (
    <View style={styles.register}>
      <View style={styles.registerContent}>


        <RegisterForm />
        {/* <View>
          <View style={styles.username}>
            <Text style={[styles.username1, styles.username1Clr]}>
              Username
            </Text>
            <View style={[styles.input, styles.mailSpaceBlock]}>
              <View style={styles.content}>
                <Image
                  style={styles.basiluserSolidIcon}
                  contentFit="cover"
                  source={require("../../../assets/basilusersolid.png")}
                />
                <Text style={[styles.enterYourUsername, styles.enterTypo]}>
                  Enter your username
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.email}>
            <Text style={[styles.username1, styles.username1Clr]}>
              Email or Phone number
            </Text>
            <View style={[styles.mail, styles.mailLayout]}>
              <Image
                style={styles.icbaselineEmailIcon}
                contentFit="cover"
                source={require("../../../assets/icbaselineemail.png")}
              />
              <Text style={[styles.enterYourEmail, styles.enterTypo]}>
                Enter your email or number
              </Text>
            </View>
          </View>
          <View style={styles.email}>
            <Text style={[styles.password1, styles.username1Clr]}>
              Password
            </Text>
            <View style={[styles.mail1, styles.mailLayout]}>
              <View style={styles.content}>
                <Image
                  style={styles.icbaselineEmailIcon}
                  contentFit="cover"
                  source={require("../../../assets/icbaselineemail1.png")}
                />
                <Text style={[styles.enterPassword, styles.enterTypo]}>
                  Enter password
                </Text>
              </View>
              <Image
                style={styles.icbaselineEmailIcon2}
                contentFit="cover"
                source={require("../../../assets/icbaselineemail2.png")}
              />
            </View>
          </View>
          <LinearGradient
            style={[styles.getStartedButton, styles.mailLayout]}
            locations={[0, 0.27, 0.56, 0.83]}
            colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
          >
            <Text style={styles.getStarted}>Create Account</Text>
          </LinearGradient>
        </View> */}
        <Text style={[styles.orUseSocial, styles.username1Clr]}>
          or use social account
        </Text>
        <View style={styles.continueWithSocial}>        
          <SocialAccountButton containerStyle={[styles.continueLayout]}
            imageStyle={styles.basiluserSolidIcon} source={require("../../../assets/icbaselineemail3.png")}
            textStyle={[styles.continueWithGoogle1, styles.username1Typo]} title="Continue with Google"
            onPress={()=>{alert("presssssssssssssss")}}
          />   
                
          <SocialAccountButton containerStyle={[styles.continueWithTwitter, styles.continueLayout]}
            imageStyle={styles.basiluserSolidIcon} source={require("../../../assets/icbaselineemail4.png")}
            textStyle={[styles.continueWithGoogle1, styles.username1Typo]} title="Continue with Twitter"
          />            
          <SocialAccountButton containerStyle={[styles.continueWithTwitter, styles.continueLayout]}
            imageStyle={styles.basiluserSolidIcon} source={require("../../../assets/icbaselineemail5.png")}
            textStyle={[styles.continueWithGoogle1, styles.username1Typo]} title="Continue with Facebook"
          />

        </View>
      </View>
      <Text style={[styles.createAccount, styles.username1Clr]}>
        Create Account
      </Text>
      <Image
        style={styles.underlineIcon}
        contentFit="cover"
        source={require("../../../assets/underline.png")}
      />
      <IPhoneWithNotch />
    </View>
  );
};

const styles = StyleSheet.create({
  username1Clr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  mailSpaceBlock: {
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
  },
  enterTypo: {
    marginLeft: 12,
    color: Color.colorGainsboro,
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
  },
  mailLayout: {
    height: 50,
    flexDirection: "row",
    width: 300,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  username1Typo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  continueLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    height: 50,
    flexDirection: "row",
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  username1: {
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  basiluserSolidIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  enterYourUsername: {
    letterSpacing: -0.6,
    fontSize: FontSize.size_base,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 300,
    borderRadius: Border.br_3xs,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  username: {
    justifyContent: "center",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  enterYourEmail: {
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro,
  },
  mail: {
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    height: 50,
  },
  email: {
    marginTop: 24,
    justifyContent: "center",
  },
  password1: {
    letterSpacing: -0.6,
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  enterPassword: {
    letterSpacing: -0.6,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro,
  },
  icbaselineEmailIcon2: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail1: {
    justifyContent: "space-between",
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    height: 50,
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  getStartedButton: {
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    marginTop: 24,
    justifyContent: "center",
    overflow: "hidden",
  },
  orUseSocial: {
    marginTop: 24,
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  continueWithGoogle1: {
    color: Color.colorBlack,
    marginLeft: 16,
    textAlign: "left",
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
  createAccount: {
    top: 81,
    left: 120,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register;
