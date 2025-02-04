export const shortenString = (str = '', length = 10) => {
    if(!str) return
    if(str.length <= length) return str
    return str.slice(0, length).concat('...')
}

export const findClosestCharacter = (str, targetChar, position) => {
    let closestIndex = -1;
    let closestDistance = Infinity;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === targetChar) {
            const distance = Math.abs(i - position)
            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = i
            }
        }
    }

    return closestIndex
}