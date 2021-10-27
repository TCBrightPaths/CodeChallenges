//Write a function caled decoder with one parameter called code.
// Make sure string starts with a number and ends with a letter.
//If the strings begins with a number, then count that many spaces and log the next value [i]
const decoder = code => {
    let splitStr = code.split('')
    let result = ''
  
    for (let i = 0; i < splitStr.length; i++) {
      if (!isNaN(+splitStr[i])) {
        i += +splitStr[i]
      } else {
        result += splitStr[i]
      }
    }
  
    return result
  }

  console.log(decoder('0h2xce5ngbrdy'));