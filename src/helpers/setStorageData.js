import AsyncStorage from "@react-native-async-storage/async-storage"

const setStorageData = (data)=> {

    try{
    const storageData = JSON.stringify(data);
    AsyncStorage.setItem("user",storageData)
    .then(()=>{
        alert("success set storage");
        console.log("success set storage");
    })
    .catch(()=>{
        alert("failure set storage")
        console.log("failure set storage")
    })
    }catch(error){
        console.log(error);
    }
  
}

export default setStorageData;