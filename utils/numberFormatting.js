export const numberWithK = (numValue) => {
	const parsedNumber = parseInt(numValue)
    if (parsedNumber >= 1000) {
        return (parsedNumber / 1000).toFixed(1) + 'K'
    }
    return numValue
}