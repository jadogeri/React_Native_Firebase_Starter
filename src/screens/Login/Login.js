import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import ScreenTitle from "../../components/ScreenTitle";
import SocialAccountButton from "../../components/SocialAccountButton";
import { useNavigation } from "@react-navigation/core";
import LoginForm from "../../components/LoginForm/LoginForm";
import useFirebase from "../../hooks/useFirebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const Login = () => {
  const navigation = useNavigation()
  const [ auth] = useFirebase();

  // onLoginOrRegister = () => {
  //   GoogleSignin.signIn()
  //     .then((data) => {
  //       // Create a new Firebase credential with the token
  //       const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
  //       // Login with the credential
  //       return firebase.auth().signInWithCredential(credential);
  //     })
  //     .then((user) => {
  //       // If you need to do anything with the user, do it here
  //       // The user will be logged in automatically by the
  //       // `onAuthStateChanged` listener we set up in App.js earlier
  //     })
  //     .catch((error) => {
  //       const { code, message } = error;
  //       // For details of error codes, see the docs
  //       // The message contains the default Firebase string
  //       // representation of the error
  //     });
  // }


  return (
    <View style={styles.login}>
      <View style={styles.registerContent}>
      <Text style={[styles.getStarted, styles.textTypo,{color:"blue"}]}>Sign In</Text>
      <LoginForm />     
      
        <Text style={[styles.orUseSocial, styles.emailTypo]}>
          
          <Text style={{color:"blue"}} onPress={()=>navigation.navigate("Register")}>Create account </Text> 
          or use social account
        </Text>
        <View style={styles.continueWithSocial}>
     
          <SocialAccountButton containerStyle={[styles.continueLayout]} //onPress={googleLoginHandler}
            imageStyle={styles.icbaselineEmailIcon3} source={require("../../../assets/icbaselineemail3.png")}
            textStyle={[styles.continueWithGoogle1, styles.emailTypo]} title="Continue with Google"
          />      
          <SocialAccountButton containerStyle={[styles.continueWithTwitter, styles.continueLayout]}
            imageStyle={styles.icbaselineEmailIcon3} source={require("../../../assets/icbaselineemail6.png")}
            textStyle={[styles.continueWithGoogle1, styles.emailTypo]} title="Continue with Twitter"
          />        
          <SocialAccountButton containerStyle={[styles.continueWithTwitter, styles.continueLayout]}
            imageStyle={styles.icbaselineEmailIcon3} source={require("../../../assets/icbaselineemail5.png")}
            textStyle={[styles.continueWithGoogle1, styles.emailTypo]} title="Continue with Facebook"
          />
        </View>
      </View>
      <ScreenTitle style={[styles.signIn, styles.signInTypo]} title="Sign in"/>    
    </View>
  );
};



export default Login;

/**
 * import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useFirebase from './src/hooks/useFirebase';
import { useState } from 'react';

export default function App() {
  const [db,colRef,getFirestore,collection,deleteDoc,getDocs,addDoc,doc, onSnapshot,
         query,where,orderBy,updateDoc,getDoc,setDoc,auth,
         createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword] = useFirebase();
  console.log("database instance",JSON.stringify(db));
  const [data, setData] = useState([])
  const [author, setAuthor] = useState("");
  const [title, setTitle]= useState("");
  const [bookID, setBookID]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [singleDoc, setSingleDoc] = useState({})
  const [user, setUser] = useState({});


  let books = []

  const getBooks =()=>{
    // get collection data
  getDocs(colRef)
  .then(snapshot => {
     console.log("snapshot docs",snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
      setData(books)
    })
    console.log(JSON.stringify(books))
  })
  .catch(err => {
    console.log(err.message)
  })
  }

  // getting all data in collection using collection reference
  // onSnapshot(colRef, (snapshot)=>{
  //   console.log("snapshot docs",snapshot.docs)
  //   let books = []
  //   snapshot.docs.forEach(doc => {
  //     books.push({ ...doc.data(), id: doc.id })
  //     setData(books)
  //   })
  //   console.log(JSON.stringify(books)) 
  
  // })

  //getting subset of collection using query

  const q = query(colRef, where("author","==","tom clancy"));

  // onSnapshot(colRef, (snapshot)=>{
  //   console.log("snapshot docs",snapshot.docs)
  //   let books = []
  //   snapshot.docs.forEach(doc => {
  //     books.push({ ...doc.data(), id: doc.id })
  //     setData(books)
  //   })
  //   console.log(JSON.stringify(books)) 
  
  // })

  //get a single document
  const docRef = doc(db, "books", "qMDL7Rs4k5JnI9BVrqIh")

  // onSnapshot(docRef, (doc)=>{
  //   console.log(doc.data(),doc.id)
  //   setSingleDoc(doc)
  // })



// const getBooks =()=>{
//   // get collection data
// getDocs(colRef)
// .then(snapshot => {
//    console.log("snapshot docs",snapshot.docs)
//   let books = []
//   snapshot.docs.forEach(doc => {
//     books.push({ ...doc.data(), id: doc.id })
//     setData(books)
//   })
//   console.log(JSON.stringify(books))
// })
// .catch(err => {
//   console.log(err.message)
// })
// }

const addBook =()=>{
   addDoc(colRef, {
    title: title,
    author: author,
  })
  .catch((e) => {
    console.log(e);
  })
}


const deleteBook =(book)=>{
// // deleting docs
  const docRef = doc(db, 'books', bookID)

  deleteDoc(docRef)
    .then(() => {
      console.log("deleted book with id ",bookID)
    }).catch((error)=>{
      console.log(error)
    })
}


const updateBook =()=>{
  // // deleting docs
    const docRef = doc(db, 'books', bookID)
  
    console.log("title of book == ", title)
  setDoc(docRef, {title : title})
    .then(() => {
      console.log("updated book with id ",bookID)
    }).catch((error)=>{
      console.log(error)
  })
}

const createUser =()=>{
  // // deleting docs
  
    console.log("create user with credentials == ", "email == ",email," password ==  ",password)
  createUserWithEmailAndPassword(auth,email,password)
    .then((cred) => {
      console.log("created user",cred.user)
      setUser(cred.user)
    }).catch((error)=>{
      console.log(error)
      console.log(JSON.stringify(error))

  })
}

const sign_out = ()=>{
  signOut(auth).then(()=>{console.log("user signed out")}).catch((e)=> console.log(e))

}

const sign_in = ()=>{
 signInWithEmailAndPassword(auth, email,password)
 .then((cred)=>{console.log("cred ",typeof cred,"user ",typeof cred.user,cred.user), " logged in";setUser(cred) } )
 .catch((e)=>{console.log(e)})

}



  return (
    <>
    <View style={styles.container}>
    <button onClick={createUser}>Create User</button>
    <h2> user logged in</h2>
    <h4>{JSON.stringify(user,null,2)}</h4>
    <button onClick={sign_out}>sing out</button>
    <button onClick={sign_in}>sing in</button>
    <input placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <input placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

    
      <Text>Open to start working onla ll your app! 12345</Text>
      <StatusBar style="auto" />
      <button onClick={getBooks}
      >get books</button>
     <Text>{JSON.stringify(data)}</Text>
     <div style={{flexDirection : "row"}}> 
     <button onClick={addBook}>add book</button>   
       <input placeholder='enter author' value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
       <input placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
       </div> 
     <Text>{JSON.stringify(data)}</Text>  
     <button onClick={deleteBook}>delete book</button>
       <input placeholder='enter book id' value={bookID} onChange={(e)=>setBookID(e.target.value)}></input>
     <Text>{JSON.stringify(data)}</Text>  
     <button onClick={updateBook}>update book</button>
       <input placeholder='enter book id' value={bookID} onChange={(e)=>setBookID(e.target.value)}></input>
       <input placeholder='enter author' value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
       <input placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
     <Text>{JSON.stringify(data)}</Text>  
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/**
 * 
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmXgb_58lO7aK_ujN37pGlNxzWGEU0YpI",
  authDomain: "fb9-sandbox.firebaseapp.com",
  projectId: "fb9-sandbox",
  storageBucket: "fb9-sandbox.appspot.com",
  messagingSenderId: "867529587246",
  appId: "1:867529587246:web:dc754ab7840c737f47bdbf"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
  .then(() => {
    addBookForm.reset()
  })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})

 */





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBze88AjFtaCI8sz727BLb9OU9zR1DBWo8",
//   authDomain: "neworleansfoodspots-b97c1.firebaseapp.com",
//   projectId: "neworleansfoodspots-b97c1",
//   storageBucket: "neworleansfoodspots-b97c1.appspot.com",
//   messagingSenderId: "359160571189",
//   appId: "1:359160571189:web:2d301a5c0ed089e070987c",
//   measurementId: "G-HS7E46LGMY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/**
 * 
 * import React, { useContext, useState } from "react";
import styles from "./SignInStyles";
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { StatusBar } from "react-native";
import { Context as AuthContext } from '../../context/AuthContext'

let defaultData = { email: '', password: '', username: '', secureTextEntry: true, check_textInputChange: false, hash: '' }
const SignInScreen = ({ navigation }) => {

    const { signin, state ,token} = useContext(AuthContext)

    const [data, setData] = useState(defaultData)

    const handleLogin = async (email, password) => {
        try {
            console.log(`email=== ${email} , password=== ${password}`)
            signin(email,password)
            if(state.isLoggedIn)
                navigation.navigate('Home')
            //await AsyncStorage.setItem('token', JSON.parse(response.data))
            //console.log(JSON.parse(response.data))

        } catch (err) {
            console.log(err, 'an error')
        }

    }
    const textInputChange = (val) => {
        if (val.trim().length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const passwordChangeHandler = (value) => {
        setData({
            ...data,
            password: value
        })
    }

    const updateSecureEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry })
    }



    return <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
        </View>
        <Animatable.View style={styles.footer} animation='fadeInUpBig'>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <MaterialIcons name='email' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Email" style={styles.textInput}
                    autoCapitalize="none" onChangeText={(input) => { textInputChange(input) }}
                />
                {data.check_textInputChange ?
                    <Animatable.View animation='bounceIn'>
                        <Feather name='check-circle' color='brown' size={20} />
                    </Animatable.View>
                    : null}
            </View>
            <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

            <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Password" style={styles.textInput} display='none'
                    autoCapitalize="none" secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(value) => { passwordChangeHandler(value) }}

                />
                <TouchableOpacity onPress={updateSecureEntry}>
                    {data.secureTextEntry ?
                        <Feather name='eye-off' color='brown' size={20} />
                        :
                        <Feather name='eye' color='brown' size={20} />}
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => handleLogin(data.email, data.password)}

                    style={[styles.signIn, { backgroundColor: 'brown' }]}>
                    <Text style={{ color: 'white' }}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}
                style={[styles.signIn, { borderColor: 'brown', borderWidth: 1, marginTop: 15 }]}>
                <Text style={{ color: 'brown' }}>Sign Up</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>
}

export default SignInScreen;
 */


/**
 * 
 * 
 * //will replace


  export default styles;
 */