export const passwordChangeHandler = (value, data, setData) => {
    setData({
        ...data,
        password: value
    })
}

