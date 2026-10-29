// Console & Basics

/* 1. Print  "Hello JavaScript"in the console.
2. Print your name, age, and city using one console.log()
3. Print a warning message using console.warn()
4. Print an error message using console.error()
5. Use  console.table() to display an array of 5 numbers */

console.log("Hello JavaScript")

console.log("Faiz","25","Bhopal")

console.warn("this movie for 18+")

console.error("server overload");

console.table(["Faiz","Kaif","Saif","Sadiya"]);

/* Variables

1. Create a variable called studentName and store your name in it.
2. Create a variable age and print it.
3. Create two variables and swap their values.
4. Create a constant variable for PI and print it.
5. Declare a variable without assigning a value and print it.
6. Create a variable score and increase it by 10.
7. Create three variables for first name, last name, and full name.*/

var studentname = "Faiz Akram";
console.log(studentname);



var age = 23
console.log(age)


var a = 25
var b = 30

var temporary =  a;
a = b;
b = temporary

console.log(a,b);

// other method

a = 25
b = 30
// swapping using destructuring
[a,b]=[b,a];
console.log(a,b)

var PI = 3.14
console.log(PI)

var unassignedvarible
console.log(unassignedvarible)


var a = 20
 a +=10
console.log(a)

var firstname = "Faiz"
var lastname = "Akram"
var fullname = firstname + " " + lastname
console.log(fullname)

/* 
## Data Types

1. Create variables of type string, number, boolean, null, and undefined.
2. Check the type of different variables using `typeof`.
3. Store your mobile number in a variable and check its type.
4. Create a variable with value `null` and check its type.
5. Create a bigint number and print it.

*/

var str = "Hello"
console.log(str)
var num = 25
console.log(num)
var isplaycricket = false
console.log(isplaycricket)
var empty = null
console.log(empty)
var notAssigned;
console.log(notAssigned)


var a = "Faiz"
console.log(typeof a)
var a = 25
console.log(typeof a)
var isplaycricket = false
console.log(typeof isplaycricket)
var empty = null
console.log(typeof empty)
var notAssigned;
console.log(typeof notAssigned)

var mobileNumber = 83952090070
console.log(mobileNumber)
console.log(typeof mobileNumber)

var bnull = null
console.log(bnull)
console.log(typeof bnull)

var BigInt = 1255156525415245n
console.log(BigInt)
console.log(typeof BigInt)


/* 
## Type Conversion & Coercion

1. Convert the string `"50"` into a number.
2. Convert the number `100` into a string.
3. Convert `"true"` into a boolean.
4. Check the output of:
- `"5" + 2`
- `"5" - 2`
- `true + 1`
1. Create a variable with value `"123abc"` and convert it into a number.
2. Use `parseInt()` on `"500px"`.
*/

var string = "50"
var convertedNum = Number(string)
console.log(convertedNum,typeof convertedNum);

var num = "100"
var convertedstr = String(num)
console.log(typeof convertedstr, convertedstr)

var boolstr = "true"
var convertedBool = (boolstr === "true")
console.log(convertedBool,typeof convertedBool)

console.log("5"+2)
console.log("5"-2)
console.log(true+1)

var a = '123abc'
var convertednum = Number(a)
console.log(convertednum,typeof convertednum)

var pixelVal = "500px"
var parsedVal = parseInt(pixelVal)
console.log(parsedVal)

/* 
## Operators

1. Add two numbers and print the result.
2. Find the remainder when 25 is divided by 4.
3. Find the square of a number using exponent operator.
4. Increment a variable using `++`.
5. Decrement a variable using `-`.
6. Use `+=` operator to increase a variable by 20.
7. Compare two numbers using `>`, `<`, `>=`, `<=`.
8. Check if two values are strictly equal using `===`.
9. Compare `"10"` and `10` using both `==` and `===`.  ==== aloso check their typeof
10. Create two boolean variables and test `&&`, `||`, and `!`.
*/

num1 = 10
num2 = 12
console.log(num1 + num2)

console.log(25/4)

let baseNum = 6
console.log(baseNum**2)

var a = 12
a++;
console.log(a)

var b = 12
b--;
console.log(b)

var c = 20
c += 20
console.log(c)

var x = 10
var y = 12
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

var f = 10
var g = "10"
console.log(f===g)

var a = 10
var b = 10
console.log(a===b)

var g = 10
var h = "10"
console.log(g==h)

var g = 10
var h = "10"
console.log(g===h)  

var a = 10
var b = 11

// convert numbers into actual boolean
var boolA = a>0;
var boolB = a>0;

var andResult = boolA && boolB
var orResult = boolA || boolB
var notResult = !boolA 

console.log(andResult)
console.log(orResult)
console.log(notResult)

// Other Method

var isonline = true;
var hasPermission = false;

console.log(isonline && hasPermission)
console.log(isonline || hasPermission)
console.log(!isonline)
console.log(!hasPermission)


/* 
## Strings

1. Create a string and print its length.
2. Convert a string into uppercase.
3. Convert a string into lowercase.
4. Check if a string includes the word `"JavaScript"`.
5. Extract the word `"World"` from `"Hello World"`.
6. Replace `"apple"` with `"mango"` in a sentence.
7. Split `"HTML,CSS,JS"` into an array.
8. Remove extra spaces from a string.
9. Repeat the word `"Hi"` 5 times.
10. Print the first character of a string.
11. Use template literals to print:`"My name is Aman and I am 20 years old"`
*/

var str = "Faiza"
console.log(str.length);


var string = "Hello faiz"
console.log(string.toUpperCase())

var str = "HELLO FAIZ"
console.log(str.toLowerCase())

let checkText = "i love javascript"
console.log(checkText.includes("javascript"))

const text = "Hello World" 
const extracted = text.slice(6)
console.log(extracted)

const sentence = "i like a apple"
const updatedsentence = sentence.replace("apple","mango")
console.log(updatedsentence)

const arraystr =  "HTML,CSS,JS"
const split = arraystr.split(",")
console.log(split)
// Other Method
console.log([ "HTML", "CSS", "JS" ])

const strng = "Hello Faiz"
const removedstrng = strng.trim()
console.log(removedstrng)

const word = "Hi";
const repeated = word.repeat("5")
console.log(repeated)

const strs= "JavaScript"
console.log(strs[0])

const name = "Aman"
const umr = 20
const sentences = `My name is ${name} and i am ${umr} years old`;

console.log(sentences)



/*
## Numbers & Math

1. Round `4.7` using `Math.round()`.
2. Find the square root of 81.
3. Find the maximum number from `10, 20, 5, 99`.
4. Generate a random number between 1 and 10.
5. Convert `"99.99"` into an integer.
6. Check whether `25` is an integer or not.
7. Use `toFixed(2)` on `3.141592`.
*/
const Mathround = 4.7
const rounded = Math.round(4.7)
console.log(rounded)


const squareRoot = Math.sqrt(81);
console.log(squareRoot);

const maximumNumber = Math.max(10,20,5,99)
console.log(maximumNumber)


const randomNum = Math.floor(Math.random()*10)+1
console.log(randomNum)

var str = "99.99"
var integer = parseInt(str,10)
console.log(integer)


var num = 25
var isInteger = Number.isInteger(25)
console.log(isInteger)

const pi = 3.141592
const formatted = pi.toFixed(2)
console.log(formatted)
/* 
## Conditionals

1. Check whether a number is positive or negative.
2. Check whether a number is even or odd.
3. Check whether a person is eligible to vote.
4. Find the largest among two numbers.
5. Find the largest among three numbers.
6. Check whether a year is a leap year.
7. Check whether a number is divisible by both 3 and 5.
8. Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail
1. Check whether a character is a vowel or consonant.
2. Create a calculator using `switch` statement.
3. Print the day name based on a number (1–7).
4. Check whether a username is `"admin"` and password is `"1234"`. 
*/

const Num2 = -15
if (Num2>0){
    console.log("Positive")
}else{
    console.log("Negative")
}


let Num1 = 13
if (Num1/2===0){
    console.log("Even")
}else{
    console.log("Odd")
}

var age = 23
if(age>=18){
    console.log("Eligible for vote")
}else{
    console.log("not eligible")
}


var a = 25
var b = 27

if(a>b){
    console.log(`${a} is larger`)
}else if(a<b){
    console.log(`${b} is larger`)
}else{
    console.log("both are equal")
}


var x = 22
var y = 25
var z = 29

if(x >= y && x >= z){
    console.log(`${x} is largest`)
}else if(y >= x && y >= z){
    console.log(`${y} is largest`)
}else{
    console.log(`${z} is largest`)
}

var year = 2026
if((year/4===0 && year/100 !==0)|| year/400===0){
    console.log(`${year} is a leap year`)
}else{
    console.log(`${year} is non leap year`)
}

var num1 = 30
if(num1/3 ===0 && num1/5===0){
    console.log("Divisble by both 3 and 5")
}else {
    console.log("Not divisible by both 3 and 5")
}

const marks = 86
if(marks >= 90){
    console.log("Grade A+")
}else if(marks >= 80){
    console.log("Grade B+")
}else if(marks >= 70){
    console.log("Grade B")
}else if(marks >= 60){
    console.log("Grade C")
}else{
    console.log("Fail")
}

const char = "E"
const lowerchar = char.toLowerCase()

if("a,e,i,o,u".includes(lowerchar)){
    console.log(`${char} is a vowel`)
}else{
    console.log(`${char} is consonant`)
}


var num1 = 15
var num2 = 55
var operator = "abf"

switch (operator) {
  case "+":
    console.log(`Result: ${num1 + num2}`);
    break;
  case "-":
   console.log(`Result:${num1-num2}`)
    break;
    case "*":
    console.log(`Result:${num1*num2}`)
    break;
    case "/":
        if(num2 !==0){
        console.log(`Result:${num1/num2}`);
    }else{
        console.log("ERROR: canot divide by 0");
    }
    break;
    default:
        console.log("Error: Invalid operator");
}

const username = "Faizakram"
const password = "1234"

if(username === "Faizakram" && password==="12345"){
    console.log("Login succesfully! Welcome Faiz")
}else{
    console.log("incoorect username or password")
}



/* ## Truthy & Falsy

1. Check whether an empty string is truthy or falsy.
2. Check whether `0` is truthy or falsy.
3. Check whether `[]` is truthy or falsy.
4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`. 
*/
//
const Emptystr = ""
if(Emptystr){
    console.log("Empty string is Truthy");
} else {
  console.log("Empty string is Falsy");
}

//
const m = 0
if(m){
    console.log("0 is truthy")
}else{
    console.log("0 is falsy")
}

//
const emptyArr = []
if (emptyArr){
    console.log("[] is truthu")
}else{
    console.log("[] is falsy")
}
//
var a =  ""
if(a){
    console.log("Valid")
}else{
    console.log("Invalid")
}



/*
## Mixed Practice Questions

1. Create a mini biodata program using variables and template literals.
2. Calculate the area of a rectangle.
3. Calculate the simple interest.
4. Convert temperature from Celsius to Fahrenheit.
5. Convert kilometers into meters.
6. Calculate total marks and percentage of 5 subjects.
7. Calculate electricity bill based on units consumed.
8. Create a username generator using first name and birth year.
9. Check whether a string starts with a specific letter.
10. Count the total characters in a sentence excluding spaces. 
*/

// 
var fullName = "Faiz Akram"
var age = 23
var profession = "full stack Engineer"
var city = "Bhoapl"

var biodata = `---Biodata---
name:${fullName}
age:${age}
profession:${profession}
city:${city}`

console.log(biodata)

// 
var l =  45
var w = 30
var RectangleArea = l*w

console.log(`Area of Reactangle:${RectangleArea}sq units`)

// 
const principal = 1000
const Rate = 12
const Time = 1.5

const SimpleInterest = (principal*Rate*Time)/100
console.log(`Simple Interest: ₹${SimpleInterest}`)


// 
const celsius = 37
const farehheit = (celsius*9)/5+32
console.log(farehheit)

// 
const km = 20
const meter = (km*1000)
console.log(meter)

// 
const math = 85
const english = 92
const urdu= 65
const hindi = 55
const physics = 80

const totalMArks =  math+english+urdu+hindi+physics
const maxMarks = 500
const percentage = (totalMArks/maxMarks)*100
console.log(percentage)

// 
const unitConsumed = 250
let billAmount = 0
if(unitConsumed<=100){
   billAmount= unitConsumed*3
}else if(unitConsumed <=200){
    billAmount = (100*3)+((unitConsumed-100)*5)
}else{
    billAmount = (100*3)+(100*5)+((unitConsumed-200)*8)
}
console.log(`ElectricBill:₹${billAmount}`)

// 
const firstName = "Faiz"
const birthYear = 2004

const userName =  `${firstName.toLowerCase()}_${birthYear}`;
console.log(`Generated Username:${userName}`)

// Check whether a string starts with a specific letter
 var str = "I love Bhopal"
 var searchletter = "I"

 var result  = str.startsWith(searchletter)
 console.log(result)

 /*another method */
 var str = "I love Bhopal"
 var Searchletter = "i"
 if(str.toLowerCase().startsWith(searchletter.toLocaleLowerCase())){
    console.log("yes")
 }else{
    console.log("no")
 }
 console.log()

//  another method
var str = "JavaScript"
var serachletter = "j"
var result = str.toLowerCase().startsWith(serachletter.toLowerCase())
console.log(result)


// Count the total characters in a sentence excluding spaces. 

const sent = "JavaScript is fun"
var count = sent.replaceAll(" ","").length
console.log(count)
/*
## Logical Thinking Questions

1. Take two numbers and print which one is greater.
2. Check whether a number lies between 10 and 50.
3. Check whether a password length is greater than 8.
4. Check if a person can drive:
- age > 18
- has license = true
1. Check whether a number is divisible by 2, 3, or both.
2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
3. Find whether a number is a multiple of 10.
4. Create a simple discount calculator.
5. Check whether a product is in stock.
6. Calculate final bill after GST. 
*/

//1. Take two numbers and print which one is greater.
var  num1 = 23
var num2 = 24
if(num1 > num2){
    console.log(`${num1} is greater`)
}else if(num2>num1){
    console.log(`${num2} is greater`)
}else{
    console.log("Both Number are equal")
}

// 2. Check whether a number lies between 10 and 50
var a = 45
if(a >=10 && a<=50){
    console.log(`${a} lies between 10 to 50`)
}else{
    console.log(`${a} outside the range`)
}

// 3. Check whether a password length is greater than 8.
var passWord = "securePassword"
if(passWord.length>8){
    console.log("password length is valid")
}else{
    console.log("Password is too short")
}

// 4. Check if a person can drive:
//- age > 18
//- has license = true

var age = 15
var hasLicense = true
if(age>18 && hasLicense){
    console.log("Eligible can drive")
}else{
    console.log("Not Eligible for drive")
}

//1. Check whether a number is divisible by 2, 3, or both.
var a = 45
if( a % 2 === 0 && a % 3 === 0){
    console.log(`${a} is divisible by 2 and 3 `)
}else if(a % 2 ===0){
    console.log(`${a} is divisible by 2`)
}else if(a % 3 ===0){
    console.log(`${a} is divisible by 3`)
}else{
    console.log(`${a} is neither divided by 2 and 3`)
}

// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.

const CurrentTime = 17
if(CurrentTime >=5 && CurrentTime<12){
    console.log("Good Morning")
}else if(CurrentTime>=12 && CurrentTime < 17){
    console.log("Good Afternoon")
}else {
    console.log("Good evening")
}

// 3. Find whether a number is a multiple of 10.
var a = 80
if(a % 10 ===0){
    console.log(`${a} is a multiple of 10`)
}else{
    console.log(`${a} ia not multiple of 10`)
}

// Create a simple discount calculator.  //10% offif bill>1000
const BillAmount = 1500
let discount = 0
if(BillAmount>1000){
    discount  = BillAmount * .10
}
var FinalAmount = BillAmount-discount
console.log(`final Payable Amount: ₹${FinalAmount}`)

/*Another method use of condition */
const billamount = 4000
let discountpercent = 0
if(billamount>=3500){
    discountpercent = 15
}else if(billamount>=2000){
    discountpercent = 10
}else if(billamount>1000){
    discountpercent = 5
}else{
    discountpercent = 0
}
var discountAmount = (billamount*discountpercent)/100
var finalAmount = (billamount-discountAmount)
console.log(`FinalAmount:₹${finalAmount}`)

// Check whether a product is in stock.
const availableStock = 0
if(availableStock>0){
    console.log(`in stock: ${availableStock} item available`)
}else{
    console.log("out of stock")
}


//  Calculate final bill after GST. 
var billamounts = 4000
var gstRate = 18  //18%
//calculate gst amount(principal*rate)/100
var gstamount = (billamounts*gstRate)/100    //(4000*18)/100
var finalbill = gstamount+billamounts
console.log(finalbill)


/* 
## Challenge Questions for Beginners
1. Generate a random otp of 4 digits.
2. Reverse a 3-letter string manually.
3. Find the last character of a string.
4. Convert a full name into uppercase initials.
5. Check whether two strings are equal ignoring case sensitivity.
6. Create a simple login validation system.
7. Find whether a number is a 2-digit or 3-digit number.
8. Create a mini ATM balance checker.
9. Simulate a traffic light system using `switch`.
10. Build a small marksheet generator using variables and conditionals 
*/

// 1. Generate a random otp of 4 digits.
const otp = Math.floor(1000+Math.random()*9000)
console.log(`Generate OTP:${otp}`)


// Reverse a 3-letter string manually.

var str = "CAT" 
var reversed = str[2]+str[1]+str[0]
console.log(reversed)

// 
var str = "FAIZ";
var reversed = str.split("").reverse().join("");

console.log(reversed); // "ZIAF"
console.log(str);      // "FAIZ" (original remains unchanged)

// Find the last character of a string.

const texts = "Developer"
const lastChar = texts.at(-1)
console.log(lastChar)

var a = "developers"
var lastchar = a[a.length-1]
console.log(lastchar)

// Convert a full name into uppercase initials.
var fullName = "faiz akram"
var words = fullName.trim().split(" ")
var initials = `${words[0][0].toUpperCase()}.${words[0][1].toUpperCase()}.`
console.log(`Initial:${initials}`)
console.log(initials)

// Check whether two strings are equal ignoring case sensitivity.
var str1 = "JvaScript"
var str2 = "jvascripts"
if(str1.toLowerCase() === str2.toLowerCase()){
    console.log("Both string are equal")
}else{
    console.log("strings are different")
}

// 6. Create a simple login validation system
const registeredUser = "admin"
const registeredPass = "01234"

const enteredUsername = "admin"
const enteredUserPass = "012345"

if(enteredUsername === registeredUser && enteredUserPass === registeredPass){
    console.log("Login Successful! Welcome Back")
}else{
    console.log("invalid username or password")
}


// Find whether a number is a 2-digit or 3-digit number.
const number = 450
const PositiveNumber = Math.abs(number)
if(PositiveNumber>=10 && PositiveNumber <= 99){
    console.log(`${number} is 2-digit number`)
}else if(PositiveNumber>=100 && PositiveNumber<=999){
    console.log(`${number} is 3-digit number`)
}else{
    console.log(`${number} is neither a 2 digit number nor 3 digidt number`)
}


// Create a mini ATM balance checker.
let accountBalance = 10000
const withdrawalAmount = 2500
if(withdrawalAmount<=100){
    console.log("Error:please Enter a amount greater than 100 ")
}else if(withdrawalAmount>accountBalance){
    console.log("Transaction failed:Insufficient Balance")
}else{
accountBalance -= withdrawalAmount
console.log((`Withdrawal successful:₹${withdrawalAmount}`))
console.log(`Remaining Balance: ₹${accountBalance}`)
}


// Simulate a traffic light system using `switch`.
const signal = "blue"
switch(signal.toLowerCase()){
    case "red":
        console.log("Stop! wait behind the stop line")
        break;

    case "yellow":
        console.log("Slow down and Prepare to Stop")
        break;
    case  "green":
        console.log("Go!")
        break;
    default:
        console.log("Invalid Traffic light")
}

// 10. Build a small marksheet generator using variables and conditionals 

const studntname = "Faiz Akram"
const DSA = 85;
const WEBDEV = 80;
const DBMS = 75;
const CN = 45;

const totalMarks = DSA + WEBDEV + DBMS + CN;
const maxiMarks = 400
const percent = (totalMArks/maxMarks)*100


let resultStatus = "";
if(percent >=90){
    resultStatus = "passed with DISTINCTION"
}else if(percent >=80){
    resultStatus = "A+"
}else if(percent >=70){
    resultStatus = "A"
}else if(percent >= 60){
    resultStatus = "B"
}else if(percent >= 50){
    resultStatus = "D"
}else{
    resultStatus = "FAIL"
}
console.log(`
================MARKSHEET=============
studentName : ${studntname}
DSA : ${DSA}/100
WEBDEV : ${WEBDEV}/100
DBMS : ${DBMS}/100
CN : ${CN}/100
---------------------------------------
Total Marks: ${totalMarks}/${maxMarks}
percentage: ${percent.toFixed(2)}%
Status: ${resultStatus}
`)