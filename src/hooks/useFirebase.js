import { getFirestore } from 'firebase/firestore'
 import { getAuth } from "firebase/auth"
 
 
 export default ()  =>{
 
 // init services
 const db = getFirestore();
 const auth = getAuth();
 
  return [ db,auth ] 
 }
 