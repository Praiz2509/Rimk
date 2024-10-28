let myName = 'Janet'
console.log(myName)

const name = 'Hope'

const cityOne = 'James'
const CityOne = "'james'"
console.log(CityOne);
console.log(cityOne);

// concatenation

let num1 = 'monday'
let num2 = 'tuesday'
console.log(num1 + num2);

const num3 = 'My name is Judah'
console.log(`What is your name? ${num3}`);

// student profile

let firstName = 'John'
let lastName = 'Hope'
let age = 45
let city = 'Ikeja'
let country = 'USA'
let message = `My name is ${firstName} and you can call me ${lastName}, I am ${age} years old, I live in the capital of Lagos, ${city}, I will be relocating to the western part of the world, I think i will love to visit ${country}, Thank you for your time.`

console.log(message)

let part1 = "Learning"
let part2 = "JavaScript"
let part3 = "is fun"
let sentence = part1 + " " + part2 + " " + part3
console.log(sentence)

let fName = 'Debbie'
let hobby = 'playing the keyboard'
let eMail = 'ikpraise@gmail.com'
let phrase = fName + " and I love " + hobby + " Send us a message now at " + eMail
console.log(phrase);



let x = 5
x++;
console.log('x')

// let studentName = prompt("Enter your student name: ");
// let mathMarks = parseFloat(prompt("Enter marks for math (out of 100)"));
// let englishMarks = parseFloat(prompt("Enter marks for English (out of 100)"));

// let totalMarks = mathMarks + englishMarks;
// let averageMarks = totalMarks / 2; 

// let grade =
//   averageMarks >= 90
//     ? "A"
//     : averageMarks >= 80
//     ? "B"
//     : averageMarks >= 70
//     ? "C"
//     : averageMarks >= 60
//     ? "D"
//     : averageMarks >= 50
//     ? "E"
//     : "F";
    
//     console.log(`Student Report for ${studentName}`);
//     console.log(`Math: ${mathMarks}`);
//     console.log(`English: ${englishMarks}`);
//     console.log(`Here is your Result: ${grade}`);
//     console.log(`Total Marks: ${totalMarks}`);
//     console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
    

// let performanceMessage =
//   grade === "A"
//     ? "Excellence performance! Keep it up!"
//     : grade === "B"
//     ? "Good job! But remember, hard work pays off!"
//     : grade === "C"
//     ? "You passed, but there's room for improvement."
//     : grade === "D"
//     ? "You can do better. Keep pushing!"
//     : grade === "E"
//     ? "You barely passed. Consider more studying."
//     : "Failed. Time to hit the books and improve.";

// console.log(performanceMessage);
// addition
// let a = 5;
// let b = 3;
// let sum = a + b;
// console.log(sum);

// // subtraction
// let c = 5;
// let d = 9;
// let difference = c - d;
// console.log(difference);

// // Multiplication

// let f = 6;
// let g = 8;
// let mul = f * g;
// console.log(mul);

// // Division

// let y = 800;
// let v = 2;
// let vy = y / v;
// console.log(vy);

// // Modulus

// let k = 37;
// let u = 3;
// let ku = k % u;
// console.log(ku);// equal
// let mon = 2;
// let tue = 2;
// let week = mon == tue;
// console.log(week);

// // Not equal
// let wed = 45;
// let thur = 56;
// let weeks = wed != thur;
// console.log(weeks);

// // Greater than

// let fri = 45;
// let sat = 87;
// let weekend = fri > sat;
// console.log(weekend);

// // Less than

// let hopes = 25;
// let abiolas = 54;
// let ages = hopes < abiolas;
// console.log(ages);

// // Greater than and equal to

// let u1 = 40;
// let u2 = 45;
// let u3 = u1 >= u2;
// console.log(u3);

// // less than or equal to

// let u6 = 40;
// let u7 = 45;
// let u8 = u6 <= u7;
// console.log(u8);

// // equal value and equal type

// let k6 = "food";
// let k7 = "food";
// let k8 = k6 === k7;
// console.log(k8);

let man1 = 78
let man2 = 43
let man3 = man1 === man2
console.log(man3)

let r = 7
let u = 9
let t = r && u
console.log(t)

let ages = 22
let hasLicense = true

ages >= 18 && hasLicense && console.log('you are allowed to drive')

let isWeekend = false
let isHoliday = false
isWeekend || isHoliday && console.log('you go need rest o!')

// Tenary Operator

let hasTicket = true
let chat = hasTicket ? "You can enter the event" : "you need a ticket to enter the event"

console.log(chat)

let aged = 18
let withParent = true
let hasTickets = false
let Result = (aged >= 18 || withParent) && hasTickets
 ? "you can watch the movie" : "you cannot watch the movie, go call your mama"

 console.log(Result);