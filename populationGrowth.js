//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants? At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants. At the end of the 2nd year there will be: 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **). At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213. It will need 3 entire years.

//More generally given parameters: p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//the function nbYear should return n number of entire years needed to get a population greater or equal to p.

//aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Write a function called nbYear that takes in four parameters(p0=starting population, percent=rate of growth, aug=inhabintent added each year, p=the population to equal or surpass)
    //create an array to hold yearlyGrowth
    //given a starting p0=1000
    //given a percent = percent/100 + 1
    //given an aug = 50
    //let p0 += (p0*percent) + aug
    //push that number to an array
    //keep adding to p0 until p0 <= p, then stop

    //let n = the last index of the array with the number of years needed to get a population greater or equal to p
    //console.log(n)

let nbYear = (p0, percent, aug, p) => {
    //let year2year = []
    percent = (percent/100) + 1
    let n = 0
    while (p0 <= p) {
        p0 = (p0 * percent + aug);
        n++
    }
    //let n = year2year[year2year.length-1]
    console.log(n)
}

nbYear(1500, 5, 100, 5000) //--> 15

//nbYear(1500000, 2.5, 10000, 2000000) //--> 10