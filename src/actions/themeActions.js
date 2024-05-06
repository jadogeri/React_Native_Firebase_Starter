
import { IS_DARK_THEME } from "../actionTypes/themeActionTypes"

export const toggleTheme = (dispatch) => {
    return async () => {
        try {
            
            dispatch({ type: IS_DARK_THEME });

        } catch (e) {
            console.log(e)
        }

    }
}
