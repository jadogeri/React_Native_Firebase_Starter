export const updateSecureEntry = (data, setData) => {
    setData({ ...data, secureTextEntry: !data.secureTextEntry })
};
