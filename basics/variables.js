const accountId = 132456;
let accountEmail = "singh@google.com";
var accountPassword = "132654";
accountCity = "surat";

let accountState;

// accountId = 123 // not allowed

/*
Prefer not to use var
because of issue in block scope && functional scope  
*/

accountEmail = "ss@gmail.com";
accountPassword = "change@123";
accountCity = "Banglore";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);