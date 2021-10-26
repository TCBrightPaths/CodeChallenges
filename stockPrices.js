//Write a function called Best.
//Return maxProfit possible for buyPrice < sellPrice
//sellPrice(num + 1) always comes after buyPrice(num)
//Give function and array of stock prices in order of how they happened throughout the day.
//You would start at the beginning of the day and if the second num - first number = value

const best = (arr) => {
    let maxProfit = 0;
    for(i=0; i<arr.length-1; i++) {
        for(j=i+1; j<arr.length; j++) {
            let profit = arr[j] - arr[i];
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    console.log(maxProfit);

}
//best([1, 2, 3, 4, 5]);
best([15, 10, 20, 22, 1, 9]);