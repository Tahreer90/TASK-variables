/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
const fullName = "Tahreer Alenezi"
const yearOfBirth = 1990
let hobby = "Baking"
let funFact = "I love to code"
const image = "https://media-exp1.licdn.com/dms/image/C4D03AQF3dSovIwPlTA/profile-displayphoto-shrink_200_200/0/1625827024375?e=1646870400&v=beta&t=f0_nv4bjkIHz71cZzY_S86YoQ8OyEFIQeUmFn2lUgPk"





/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${2022 - yearOfBirth}`;
const hobbyString = `My hobby is ${hobby}`



/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars ++
  // Increment stars by 1 👇🏻
} 
function decrementBy1() {
  stars --
  // decrement stars by 1 👇🏻
}

function incrementBy2() {
  stars = +2
  // Increment stars by 2 👇🏻
}
function decrementBy2() {
  stars = -2
  // decrement stars by 2 👇🏻
}
