let REACT_APP_API_KEY = "AIzaSyDZvRyOFQDBqiHdbye-ToGHsF3GYh-pgf0"
let REACT_APP_AUTH_DOMAIN = "fir-starter-3d301.firebaseapp.com"
let REACT_APP_PROJECT_ID = "fir-starter-3d301"
let REACT_APP_STORAGE_BUCKET = "fir-starter-3d301.appspot.com"
let REACT_APP_MESSAGE_SENDER_ID = "14154497156"  
let REACT_APP_APPID = "1:14154497156:web:b8a0940d215eb336fe96d1"
//Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APPID
};

// export const firebaseConfig = {
//   apiKey: REACT_APP_API_KEY,
//   authDomain: REACT_APP_AUTH_DOMAIN,
//   projectId: REACT_APP_PROJECT_ID,
//   storageBucket: REACT_APP_STORAGE_BUCKET,c
//   messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
//   appId : REACT_APP_APPID
// };
console.log(firebaseConfig)