
export const GetArray = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (array)
    }, 2000)
})
}