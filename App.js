import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/config/firebase";

console.log(firebaseConfig)
initializeApp(firebaseConfig);
export default function App() {


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>.env data === {process.env.REACT_APP_MESSAGE_SENDER_ID} </Text>
      <StatusBar style="auto" />
    </View>
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
