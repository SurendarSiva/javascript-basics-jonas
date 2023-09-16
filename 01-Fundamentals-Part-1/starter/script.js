/*let js = 'amazing';
if (js === "amazing") alert("JavaScript is FUN!!");
console.log(4 + 5 + 6 - 1);
console.log("Ram");
let firstName = "Ravi";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let javaScript = true;
javaScript = "String value";
console.log(typeof javaScript);
js = false;
console.log(typeof js);

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(year);
//-------------shows the data type in console
console.log(typeof year);
*/

// let age = 30;
// age = 31;
// ------------- trying to change const variable
// const birthYear = 1995;
// birthYear = 1997;
// ------------const should be initialized
// const name;

// -------------var is older version of let
// var profession = "coder";
// profession = "manager";
// console.log(profession);
// ---------------variables can be declared without using any keyword
// lastName = "Siva";
// console.log(lastName);

//----------Using operators
//-----------Math operators
// const currentYear = 2023;
// const ageOfSuren = currentYear - 1995;
// const ageOfDharshik = currentYear - 2022;

// console.log("Age of Dharshik is " + ageOfDharshik, "and his dad's age is " + ageOfSuren);

// console.log(ageOfSuren / 4, 4 ** 2);

//------------Assignment operators
// let x = 10 + 3;
// x += 2;
// x *= 4;
// x /= 6;
// x++;
// x--;
// console.log(x);

//-----------Comparison operators
//console.log(ageOfDharshik > ageOfSuren);

//-------------Operator precedence
//const averageAge = ((ageOfDharshik + ageOfSuren) / 2);
//console.log(averageAge);
//-----------------everything inside () gets executed first followed by other operators

// let xy, yz;
// xy = yz = 19;
// console.log(xy, yz);
//--------------assignment operators like = will be having execution order of right to left which assigns 19 to yz and then assigns to xy with yz value.
//--------------If it happens from left to right then xy will be unassigned.

//---------------If we don't assign any value it will be unassigned.
// let ab;
// console.log(ab);


// const myName = "Surendar";
// const job = "Developer";
// const yearOfBirth = 1995;
// const currentYear = 2023;

// const statement = "I'm " + myName + ", a " + (currentYear - yearOfBirth) + " years old Java " + job;
// console.log(statement);

//------------------Using template literals for strings, use backtick above Tab button
// const literalStatement = `I'm ${myName}, a ${currentYear - yearOfBirth} years old Full Stack ${job}`;
// console.log(literalStatement);


//--------Before ES6
// console.log('String in \n\
// multiple \n\
// lines');

//-----------Using ES6
// console.log(`String in
// multiple lines`);

//-------------------If-else condition example
// const driverAge = 19;
// const isEligibleToDrive = driverAge >= 18;

// if (isEligibleToDrive) {
//     console.log(`The driver can avail driving license and eligible to drive.`);
// } else {
//     const yearsLeft = 18 - driverAge;
//     console.log(`The driver is too young. Please wait for ${yearsLeft} more year/s.`);
// }

// const birthYear = 2000;
//---------------Before using any variable inside blocks like if/else, declare them outside first like cenutury here
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//------------Type Conversion

//const inputYear = '1995';
//------------Number converts String or other types to Number
// console.log(typeof (Number(inputYear) + 5));
// console.log(Number(inputYear) + 5);
// console.log(typeof (inputYear + 18));
// console.log(Number("Suren"));
//--------------NaN is Not a Number
// console.log(typeof Number("Suren"));
// console.log(String(22));
// console.log(typeof String(20));

//-------------Type Coercion
// console.log('I am ' + 28 + ' years old.');
// console.log('23' - '10' - 5);
// console.log('23' + 10 - 6);  //+ sign will handle them as String and - sign will handle them as Numbers
// console.log('1' + 1 - 1); // '1' + 1 = 11(String) then 11 - 1 = 10(Number)
// console.log('21' * 4); // * for Numbers and / also for Numbers
// console.log(27 / 9);


//---------------- falsy values - 5 values - 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean("Bahd"));
// console.log(Boolean({}));

// const money = null;
// if (money) {
//     console.log(`Don't spend too much money.`);
// } else {
//     console.log(`You should get a job!!`);
// }

// let height;
// if (height) {
//     console.log(`Height is defined`);
// } else {
//     console.log(`Heught is undefined`);
// }

//const age = 11;
//--------------- === strict equality which checks type for comparison
// if (age === 11) {
//     console.log(`You just become an adult - strict`);
// }
//--------------- == loose equality which won't check type for comparison
//----------------  Avoid this loose equality for clean code
// if (age == 11) {
//     console.log(`You just become an adult - loose`);
// }

//const favNum = Number(prompt(`What's your favourite number?`)); // prompt will return String and we are converting to Number
//console.log(favNum);
//console.log(typeof favNum); // this is string which is prompted

// if (favNum === 23) {
//     console.log(`Cool! It's it 23`);
// } else if (favNum === 22) {
//     console.log(`NP.. It's 22`);
// } else {
//     console.log(`The value is not 22 or 23 otherwise it is not a number`);
// }

//---------------- different operator
//-----------------  !== strict version
// if (favNum !== 23) {
//     console.log(`Why not 23?`);
// }

//---------------------  Logical operator
// const hasDrivingLicense = true;
// const hasGoodVision = true;

// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// const shouldDrive = hasDrivingLicense && hasGoodVision;

// const isTired = false;
// console.log(hasDrivingLicense || hasGoodVision && isTired);

// if (shouldDrive && !isTired) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }

//---------------- Switch statements

// const day = 'Sunday'; // ---------- case sensitive here
// switch (day) {
//     case 'Monday':
//         console.log(`Plan course structure`);
//         break;
//     case 'Tuesday':
//         console.log(`Prepare draft for theory`);
//         break;
//     case `Saturday`:
//     case `Sunday`:
//         console.log(`It's weekend time`);
//         break;
//     default:
//         console.log(`Not a valid day!!`);
// }

//---------------------------------------Ternary operator

const age = 10;
const result = age >= 18 ? `I am eligible to drink!! 🍾` : `I can drink water💦`;
console.log(result);

console.log(`I can drink ${age >= 18 ? `🍾` : `💦`}`);