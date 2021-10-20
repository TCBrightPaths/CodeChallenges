function hasUniqueChar(word) {
    let newArr

    let noRepeats = (currentValue) => currentValue !== word.includes(currentValue);
    console.log(word.every(noRepeats));
}
hasUniqueChar("monday");