import { FontFamily, FontSize, Padding, Color, Border } from "../../../GlobalStyles";
import { StyleSheet, Platform } from "react-native";



const styles = StyleSheet.create({
    emailTypo: {
      textAlign: "left",
      fontFamily: FontFamily.urbanistRegular,
      fontSize: FontSize.size_sm,
    },
    mailSpaceBlock: {
      marginTop: 4,
      width: 300,
    },
    getStartedButtonFlexBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    signInTypo: {
      fontSize: FontSize.size_base,
      textAlign: "left",
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
    emailOrPhone: {
      color: Color.colorGray_100,
    },
    icbaselineEmailIcon: {
      width: 20,
      height: 20,
      overflow: "hidden",
    },
    enterYourEmail: {
      color: Color.colorGainsboro,
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
      fontFamily: FontFamily.urbanistRegular,
      fontSize: FontSize.size_sm,
    },
    password: {
      marginTop: 24,
      justifyContent: "center",
    },
    getStarted: {
      fontWeight: "600",
      fontFamily: FontFamily.urbanistSemiBold,
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
      fontFamily: FontFamily.urbanistMedium,
      color: Color.colorGray_100,
      position: "absolute",
    },
    underlineIcon: {
      top: 790,
      left: 135,
      maxHeight: "100%",
      width: 91,
      position: "absolute",
    },
    login: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: 800,
      overflow: "hidden",
    },



    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });

  export default styles;