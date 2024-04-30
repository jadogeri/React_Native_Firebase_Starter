export const updateConfirmSecureEntry = (data, setData) => {
    setData({ ...data, confirmSecureTextEntry: !data.confirmSecureTextEntry })
};
