// Write a function called timeWords that takes (a string of 24-hour time)
    //if string === '00:00', then log "midnight"
    //let time = time.split(":")
    //if (time[0] = '00' & time[1] = '00')
    //for i=0 in time
        
    //returns the time as words
// Hours 0-11 are am, and hours 12-23 are pm.
// Handle noon and midnight specially:
// Otherwise, covert times to text:
// Don’t forget to handle early morning properly:
// For times after noon, add ‘pm’:

const timeWord = (str) => {
    if(str === '00:00') {
        console.log('midnight')
    } else if (str === '12:00') {
        console.log('noon')
    } else {
        let time = str.split(':')
        let h = time[0]
        let m = time[1]
        
    }
}



//console.log(timeWord("00:12"))
// // 'twelve twelve am'

timeWord("06:30")
// // 'six thirty am'

//timeWord("12:00")
// // 'midnight'