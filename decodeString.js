const decoder = code => {
    let splitStr = code.split('')
    let result = ''
    let cipher = splitStr[0]
    for (let i = 1; i < splitStr.length; i++) {
      let value = splitStr[i] + cipher;
    }
  
    return result
  }

  console.log(decoder("2fcjjm"));