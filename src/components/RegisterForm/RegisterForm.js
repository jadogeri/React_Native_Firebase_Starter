import React, { memo, useState } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import NavButton from "../NavButton";
import InputField from "../InputField";
import styles from "../RegisterForm/styles";
import { passwordChangeHandler } from "../../helpers/passwordChangeHandler";
import  {updateSecureEntry} from "../../helpers/updateSecureEntry"
import AuthErrorText from "../AuthErrorText/AuthErrorText";
import { confirmPasswordChangeHandler } from "../../helpers/confirmPasswordChangeHandler";
import { updateConfirmSecureEntry } from "../../helpers/updateConfirmSecureEntry";
import {textInputChange} from "../../helpers/textInputChange"
import useFirebase from "../../hooks/useFirebase";
import { createUserWithEmailAndPassword, getAuth}  from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { addDoc, doc, setDoc } from "firebase/firestore";
import setStorageData from "../../helpers/setStorageData";
import getStorageData from "../../helpers/getStorageData";

let defaultData = { email: '', password: '',confirmPassword: '', username: '', secureTextEntry: true, check_textInputChange: false,
                    confirmSecureTextEntry: true, check_textInputChange: false, hash: '' }



const RegisterForm = memo(() => {

  const auth = getAuth();
  const navigation = useNavigation();
  const [data, setData] = useState(defaultData)
  const [user, setUser] = useState({});

  const registerUserHandler = () =>{
    const [db, usersCollection] = useFirebase();
    console.log("db in register form === ", db)
  
    console.log("create user with credentials == ", "email == ",data.email," password ==  ",data.password)
    console.log("***************** auth******************", auth)
    createUserWithEmailAndPassword(auth,data.email,data.password)
    .then((cred) => {
      console.log("***********************created user*************************",cred.user)
      const {user} = cred
      //add user tostorage 
      setStorageData(cred.user);
      const ref = doc(db,"users",user.uid)
      console.log("**********************ref === ",ref);
      const docRef = setDoc(ref,{email : user.email,name : "kingggggg"})
    
      console.log(" ***************testing get created user from asyncstorage******************")
      console.log("line 52 get from storage",JSON.stringify(getStorageData()))


      /*
      **
      const addBook =()=>{
   addDoc(colRef, {
    title: title,
    author: author,
  })
  .catch((e) => {
    console.log(e);
  })
}

      */
      
      setUser(user)
      //AsyncStorage.setItem("user",JSON.stringify(user))
      navigation.navigate("Dashboard")
      })
    .catch((error)=>{
        console.log("*****************error*********************",error)
        console.log(JSON.stringify(error))
  
    })
    



  }

  return (
    <View>
      <View style={styles.username}>
        <Text style={styles.username1}>Username</Text>








        {/* <View style={styles.input}>
          <View style={styles.mailFlexBox}>
            <Image
              style={styles.basiluserSolidIcon}
              contentFit="cover"
              source={require("../../../assets/basilusersolid1.png")}
            />
            <Text style={[styles.enterYourUsername, styles.textSpaceBlock]}>
              Alex
            </Text>
          </View>
        </View> */}
        <InputField label="Email" inputFieldStyle={[styles.mail, styles.mailBorder]} onChangeText={(input) => { textInputChange(input,data,setData) }}
            leftIcon="email" leftIconColor={data.email.length > 8 ?"blue": "black"}  textColor={data.email.length > 8 ?"blue": "black"} 
            leftIconStyle={{left:-5 }} 
          />
          <AuthErrorText style={[styles.invalidEmailOr, styles.invalidEmailOrTypo]}
          title="Invalid email"
        />









      </View>
      <View style={styles.emailSpaceBlock}>
        <Text style={styles.username1}>Password</Text>





{/* 
        <View style={[styles.mail, styles.mailBorder]}>
          <Image
            style={styles.icbaselineEmailIcon}
            contentFit="cover"
            source={require("../../../assets/icbaselineemail7.png")}
          />
          <Text style={[styles.abcdefghijkgmai, styles.textSpaceBlock]}>
            abcdefg.hijk@gmai
          </Text>
        </View> */}
        <InputField label="Password" inputFieldStyle={[styles.mail, styles.mailBorder]} onChangeText={(input) => { passwordChangeHandler(input,data,setData) }}
            leftIcon="lock" leftIconColor={data.password.length > 8 ?"blue": "black"}  textColor={data.password.length > 8 ?"blue": "black"} 
            leftIconStyle={{left:-5 }} secureTextEntry={data.secureTextEntry} rightIcon={data.secureTextEntry?"eye-off" : "eye"}
            eyePressHandler={()=>updateSecureEntry(data,setData)}
          
          />




       
        <AuthErrorText style={[styles.invalidEmailOr, styles.invalidEmailOrTypo]}
          title="Invalid Password"
        />
      </View>
      <View style={styles.emailSpaceBlock}>
        <Text style={styles.username1}>Verify Password</Text>
        <View style={[styles.mail1, styles.mail1Layout]}>       
       
          <InputField label="Confirm  Password" inputFieldStyle={[styles.textInput]} onChangeText={(input) => { confirmPasswordChangeHandler(input,data,setData) }}
            leftIcon="lock" leftIconColor={data.confirmPassword.length > 8 ?"blue": "black"}  textColor={data.confirmPassword.length > 8 ?"blue": "black"} 
            leftIconStyle={{left:-5 }} secureTextEntry={data.confirmSecureTextEntry} rightIcon={data.confirmSecureTextEntry?"eye-off" : "eye"}
            eyePressHandler={()=>updateConfirmSecureEntry(data,setData)}
          
          />
        </View>
      <AuthErrorText style={[styles.passwordMustBe, styles.invalidEmailOrTypo]}
          title="Password must be at least 8 letters"
        />
      </View>
  
      <NavButton routeName="Login"  buttonStyle={[styles.getStartedButton, styles.mail1Layout]}
        textStyle={styles.getStarted} title="Create Account" onPress={registerUserHandler}
      />      
    </View>
  );
});



export default RegisterForm;
