//URL--
// https://www.codewars.com/kata/5a1971bb80171fd71d000031

//INSTRUCTIONS--
/* Create a function that converts British Pounds (GBP) to Swiss Franks (CHF) . The input is the amount of GBP as an integer, and the output should be a string that states the amount of Franks followed by 'Swiss Franks'

For Example:

gbpchf(10) // => '13.10 Swiss Franks' gbpchf(256) // => '335.36 Swiss Franks' The conversion rate you should use is 1.31 CHF for every 1 GBP. All numbers shold be reounded to the nearest hundreth (e.g. 13.00 NOT 13.0 or 13)

*/

//SOLUTION--
/* I am going to make a variable called chf
    It will be equal to gbp times 1.31 rounded to 2 decimal places
return the result with " Swiss Franks" after it
*/
function gbpchf(gbp) {
    const chf = (gbp * 1.31).toFixed(2)
    return `${chf} Swiss Franks`
}
//TESTCASES--
console.log(gbpchf(10), '13.10 Swiss Franks');
console.log(gbpchf(256), '335.36 Swiss Franks');