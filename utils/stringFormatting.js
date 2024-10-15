export const shortenString = (str = '', length = 10) => {
    if(!str) return
    if(str.length <= length) return str
    return str.slice(0, length).concat('...')
}