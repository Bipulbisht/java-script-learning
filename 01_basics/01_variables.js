const accountId = 144553
let accountEmail = "bipul@gmail.com"
var accountPassword ="12345"
accountCity = "Dehradun"
let accountState;

// accountId = 2 // not allowed

/*
  prefer not to use var
 because of issue in block scope and functional scope
*/

accountEmail ="tanuj@gmail.com"
accountPassword ="246810"
accountCity = "chamoli"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
