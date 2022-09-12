
export const GetArray = (array) => {
    return new Promise((resolver, reject) => {
        setTimeout (() => {
            resolver (array)
    }, 2000)
})
}