export const isObjectNull = (obj = {}) => {
    if(!obj) return
    return Object.keys(obj).length === 0
}