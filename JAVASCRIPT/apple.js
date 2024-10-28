let userName = 'Adeboye George';
const cartAmount = "51";
const hasDiscount = true
const discount = hasDiscount && cartAmount > 50 ? 0.2 : 0;
const finalAmount = (cartAmount * (1 - discount));
const congratulatoryMessage = discount > 0 ? "You've received a 20% discount!" : "No discount applied."

const finalMessage = `Hello ${userName}, your total after discount is ${finalAmount}. ${congratulatoryMessage}`

console.log(finalMessage);

let name = 'Khalid Samuel';
let bioCompleted = true;
let profilePictureUploaded = true;
let totalFriends = 220
let completion = bioCompleted && profilePictureUploaded && totalFriends > 10 ? "complete!" : "incomplete!";
let Output = `Hello ${name}, your profile is ${completion}`
console.log(Output);

let username = "Ebenezer Gabriel"
let membershipType = "Gold"
let yearsMember = 6
let VIPACCESS = membershipType === "Gold" && yearsMember >= 5 ? "qualify" : "do not qualify"
let OutPut = `Hello ${username}, you ${VIPACCESS} for VIP access.`
console.log(OutPut);

let temperature = 35
let weather = `The temperature is ${temperature}°C, it's a ${temperature > 30 ? "hot day." : temperature < 10 ? "cold day." : "moderate day."}`
console.log(weather);

const age = 15
if (age >= 18) {
    console.log("You can come into the party");
}
else {
    console.log("No vex, no party for you");
}

const price = 1500
if (price == 2000) {
    console.log("You just purchased a crate of egg");
}
else if (price==1500) {
    console.log("You just purchased a bottle of cashew nut");
}
else {
    console.log("You have on cash");
}

let ages = 17
if (ages <= 18) {
    console.log("You are a minor.");
}

else if (ages == 18) {
    console.log("You just became an adult.");
}

else {
    console.log("You are an adult.")
}

let cars = 0
if (cars >= 5 && cars < 20) {
    console.log("You are a big man!");
}

else if (cars >= 20) {
    console.log("You are a very big woooodhdguhoman!"); 
}


else if (cars >= 1 && cars < 5) {
    console.log("You are a man!");
}

else if (cars == 0) {
    console.log("Oga! Continue with your legedeez benz");
}