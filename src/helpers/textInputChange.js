export const textInputChange = (val, data,setter) =>{

    if (val.trim().length !== 0) {
        setter({
            ...data,
            email: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setter({
            ...data,
            email: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
};