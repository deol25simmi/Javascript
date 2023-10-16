const accountId = 122573
let accountEmail = "deolsam@gmail.com"
var accountPass = "92373"
accountCity = "Agra"

let accountState;

// accountId = 27    //not allowed
accountEmail ="deolsaaam@gmail.com"
accountPass = "2122"
accountCity ="Bengaluru"

console.table([accountEmail,accountId,accountPass,accountCity])

/*prefer not to use var because of issue in block scope and functional scope 
*/

console.log(accountId);