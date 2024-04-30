export const confirmPasswordChangeHandler = (value, data, setData) => {
    setData({
        ...data,
        confirmPassword: value
    })
}

