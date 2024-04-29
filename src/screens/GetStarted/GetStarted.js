import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import IPhoneWithNotch from "../../components/IPhoneWithNotch";
import NavButton from "../../components/NavButton";
import HexImage from "../../components/HexImage";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { firebaseConfig } from "../../config/firebase/firebase";
import { initializeApp } from "firebase/app";
app = initializeApp(firebaseConfig);


const GetStarted = () => {
  console.log(firebaseConfig)
 console.log(app)
  const navigation = useNavigation();
  
  return (
    <View style={{flex:1,heigth:"100%",marginLeft:5,resizeMode :"auto"}}>
      <Image
        style={[styles.underlineIcon]}
        contentFit="cover"
        source={require("../../../assets/underline.png")}
      />
        <NavButton buttonStyle={[styles.getStartedButton,styles.textFlexBox]} onPress={()=>{navigation.navigate("Login")}}
                 textStyle={styles.getStarted1} title="Get Started" /> 
      <View style={[styles.text, styles.textFlexBox]}> 
        <Text style={styles.loremIpsumIs}>Lorem ipsum is a placeholder</Text>
        <Text style={styles.loremipsum}>LoremIpsum</Text>
      </View>
      <View style={styles.gallery}>
      
        <HexImage containerStyle={[styles.hotelImage2, styles.hotelSpaceBlock]}
          imageStyle={styles.subtractIcon} source={require("../../../assets/subtract.png")}  
        />            
        <HexImage containerStyle={[styles.hotelImage3, styles.hotelSpaceBlock]}
          imageStyle={styles.subtractIcon} source={require("../../../assets/subtract1.png")}
        />      
        <HexImage containerStyle={[styles.hotelImage1, styles.hotelSpaceBlock]}
          imageStyle={styles.subtractIcon2} source={require("../../../assets/subtract2.png")}
        />
      </View>
      <IPhoneWithNotch />
    </View>
  );
};



export default GetStarted;
