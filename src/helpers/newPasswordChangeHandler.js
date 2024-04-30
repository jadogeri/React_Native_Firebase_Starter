export const newPasswordChangeHandler = (value, data, setData) => {
    setData({
        ...data,
        newPassword: value
    })
}

