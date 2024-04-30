import AsyncStorage from "@react-native-async-storage/async-storage"

const getStorageData = async ()=> {

    let user = ""
    try{
        let data = await AsyncStorage.getItem("user")
        .then((res)=>{
            alert("success get storage");
            console.log("success get storage");
            user = res

        })
        .catch(()=>{
            alert("failure get storage")
            console.log("failure get storage")
        })
    }catch(error){
        console.log(error)
    }

    return user

}

export default getStorageData;

