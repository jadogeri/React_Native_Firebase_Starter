import { StyleSheet,Platform } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../../../GlobalStyles";


const styles = StyleSheet.create({
    textSpaceBlock: {
      marginLeft: 12,
      textAlign: "left",
      color: Color.colorGray_100,
    },
    mailBorder: {
      borderWidth: 1,
      borderColor: Color.colorRed_200,
      borderStyle: "solid",
      padding: Padding.p_smi,
      backgroundColor: Color.colorWhitesmoke,
    },
    invalidEmailOrTypo: {
      fontFamily: FontFamily.urbanistLight,
      fontWeight: "300",
      fontSize: FontSize.size_3xs,
      marginTop: 4,
      textAlign: "left",
    },
    mail1Layout: {
      height: 50,
      alignItems: "center",
      flexDirection: "row",
      width: 300,
      borderRadius: Border.br_3xs,
    },
    username1: {
      textAlign: "left",
      color: Color.colorGray_100,
      fontFamily: FontFamily.urbanistRegular,
      fontSize: FontSize.size_sm,
    },
    basiluserSolidIcon: {
      width: 24,
      height: 24,
      overflow: "hidden",
    },
    enterYourUsername: {
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.urbanistRegular,
      marginLeft: 12,
    },
    mailFlexBox: {
      alignItems: "center",
      flexDirection: "row",
    },
    input: {
      marginTop: 4,
      padding: Padding.p_smi,
      width: 300,
      backgroundColor: Color.colorWhitesmoke,
      overflow: "hidden",
      borderRadius: Border.br_3xs,
    },
    username: {
      justifyContent: "center",
    },
    icbaselineEmailIcon: {
      width: 20,
      height: 20,
      overflow: "hidden",
    },
    abcdefghijkgmai: {
      fontFamily: FontFamily.urbanistRegular,
      marginLeft: 12,
      fontSize: FontSize.size_sm,
    },
    mail: {
      width: 301,
      height: 51,
      alignItems: "center",
      flexDirection: "row",
      borderRadius: Border.br_3xs,
      borderWidth: 1,
      borderColor: Color.colorRed_200,
      borderStyle: "solid",
    },
    invalidEmailOr: {
      color: Color.colorRed_200,
    },
    emailSpaceBlock: {
      marginTop: 24,
      justifyContent: "center",
    },
    text: {
      letterSpacing: -0.6,
      fontFamily: FontFamily.poppinsRegular,
      fontSize: FontSize.size_sm,
    },
    icbaselineEmailIcon2: {
      width: 18,
      height: 18,
      overflow: "hidden",
    },
    mail1: {
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: Color.colorRed_200,
      borderStyle: "solid",
      marginTop: 4,
      padding: Padding.p_smi,
      backgroundColor: Color.colorWhitesmoke,
    },
    passwordMustBe: {
      color: Color.colorRed_100,
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

