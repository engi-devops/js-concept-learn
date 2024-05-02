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

// Create an array of objects containing name and value pairs
const data = [
    { name: "accountId", value: accountId },
    { name: "accountEmail", value: accountEmail },
    { name: "accountPassword", value: accountPassword },
    { name: "accountCity", value: accountCity },
    { name: "accountState", value: accountState }
  ];
  
  // Print the array of objects using console.table()
  console.table(data);