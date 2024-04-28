import { StyleSheet, Text, View,StatusBar,Button, TextInput,ScrollView } from 'react-native'
import React ,{useState , useEffect} from 'react'
import {
  getFirestore, collection
 , getDocs,
 addDoc, deleteDoc, doc, onSnapshot,
 query,where,orderBy, getDoc, updateDoc, setDoc
} from 'firebase/firestore'
import {
 getAuth,
  signOut, updateCurrentUser,
 updatePassword, updatePhoneNumber, updateProfile, signInWithEmailAndPassword,
 verifyBeforeUpdateEmail, deleteUser, getAdditionalUserInfo, sendEmailVerification,
 sendPasswordResetEmail, signInWithPopup,  GoogleAuthProvider,
} from "firebase/auth"
import { useNavigation } from '@react-navigation/core'

import getStorageData from '../../helpers/getStorageData'

let books = []

const getUserData = (db,collection,uid,setter)=>{
    //get a single document
    const docRef = doc(db, collection, uid)

    onSnapshot(docRef, (doc)=>{
      console.log(doc.data(),doc.id)
      setter(doc.data())
    })
}


const Dashboard = () => {

//  const [db,colRef,getFirestore,collection,deleteDoc,getDocs,addDoc,doc, onSnapshot,
//     query,where,orderBy,updateDoc,getDoc,setDoc,auth,
//     createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword] 
// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books')
console.log("database instance",JSON.stringify(db));
const [data, setData] = useState([])
const [author, setAuthor] = useState("");
const [title, setTitle]= useState("");
const [bookID, setBookID]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [singleDoc, setSingleDoc] = useState({})
const [user, setUser] = useState({});
const navigation = useNavigation()
const [userInfo, setUserInfo] = useState({})
const [userCollectionData, setUserCollectionData] = useState({})


let stringData = getStorageData()
console.log("stribg data ===============",stringData, typeof stringData)

useEffect(() => {
  stringData.then((res)=>{
    setUserInfo(JSON.parse(res))
    let data = JSON.parse(res)
    getUserData(db,"users",data.uid,setUserCollectionData)
  
  }).catch((e)=> console.log(e))
  
}, []);
 
 //console.log("userifno ==== ",userInfo)
 //setUser(userInfo)

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
  navigation.navigate("Login")

}

const sign_in = ()=>{
  console.log("sign in with email === ",email," password === ",password)
 signInWithEmailAndPassword(auth, email,password)
 .then((cred)=>{console.log("cred ",typeof cred,"user ",typeof cred.user,cred.user), " logged in";setUser(cred.user) 
  
} )
 .catch((e)=>{console.log(e)})

}


  return (
    
    <ScrollView style={styles.container}>
  <Button onPress={createUser} title="Create User"/>
    <Text> user logged in</Text><Text>{JSON.stringify(userInfo)}</Text>
    <Text>{JSON.stringify(user,null,2)}</Text>
    <Button onPress={sign_out} title="sing out"/>
    <Button onPress={sign_in} title="sing in"/>
    <TextInput placeholder='enter email' value={email} onChangeText={(input)=>setEmail(input)} />
    <TextInput placeholder='enter password' value={password} onChangeText={(input)=>setPassword(input)} /> 
    <Text>user collection data </Text>
    <Text>{JSON.stringify(userCollectionData)}</Text>

      {/* 
      <Text>Open to start working onla ll your app! 12345</Text>
      <StatusBar style="auto" />
      <Button onPress={getBooks}>get books</Button>
     <Text>{JSON.stringify(data)}</Text>
     <View style={{flexDirection : "row"}}> 
     <Button onPress={addBook}>add book</Button>   
       <TextInput placeholder='enter author' value={author} onChange={(e)=>setAuthor(e.target.value)}></TextInput>
       <TextInput placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
       </View> 
     <Text>{JSON.stringify(data)}</Text>  
     <Button onPress={deleteBook}>delete book</Button>
       <TextInput placeholder='enter book id' value={bookID} onChange={(e)=>setBookID(e.target.value)}></TextInput>
     <Text>{JSON.stringify(data)}</Text>  
     <Button onPress={updateBook}>update book</Button>
       <TextInput placeholder='enter book id' value={bookID} onChange={(e)=>setBookID(e.target.value)}></TextInput>
       <TextInput placeholder='enter author' value={author} onChange={(e)=>setAuthor(e.target.value)}></TextInput>
       <TextInput placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
     <Text>{JSON.stringify(data)}</Text>   */}
    </ScrollView>
    
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});


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
    <Button onClick={createUser}>Create User</Button>
    <Text> user logged in</Text>
    <Text>{JSON.stringify(user,null,2)}</Text>
    <Button onClick={sign_out}>sing out</Button>
    <Button onClick={sign_in}>sing in</Button>
    <TextInput placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></TextInput>
    <TextInput placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></TextInput>

    
      <Text>Open to start working onla ll your app! 12345</Text>
      <StatusBar style="auto" />
      <Button onClick={getBooks}
      >get books</Button>
     <Text>{JSON.stringify(data)}</Text>
     <View style={{flexDirection : "row"}}> 
     <Button onClick={addBook}>add book</Button>   
       <TextInput placeholder='enter author' value={author} onChange={(e)=>setAuthor(e.target.value)}></TextInput>
       <TextInput placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
       </View> 
     <Text>{JSON.stringify(data)}</Text>  
     <Button onClick={deleteBook}>delete book</Button>
       <TextInput placeholder='enter book id' value={bookID} onChange={(e)=>setBookID(e.target.value)}></TextInput>
     <Text>{JSON.stringify(data)}</Text>  
     <Button onClick={updateBook}>update book</Button>
       <TextInput placeholder='enter book id' value={bookID} onChange={(e)=>setBookID(e.target.value)}></TextInput>
       <TextInput placeholder='enter author' value={author} onChange={(e)=>setAuthor(e.target.value)}></TextInput>
       <TextInput placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
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
 