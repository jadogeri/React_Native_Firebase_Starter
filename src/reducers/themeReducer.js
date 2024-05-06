import { DarkTheme, DefaultTheme } from "@react-navigation/native";
//import AsyncStorage from "@react-native-async-storage/async-storage";

export const themeReducer = (state, action) => {
    //if current theme is Default during press
    //change theme to dark theme and vice versa
    switch (action.type) {

        case 'IS_DARK_THEME':
            if(state.isDarkTheme){

                return { ...state, theme : DefaultTheme, isDarkTheme : false }
            }
            else{

                return { ...state, theme : DarkTheme, isDarkTheme : true }
            }
        
        default: state;
    }
}

