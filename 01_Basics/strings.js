const name ="karsaz"
const repoCount = 90;
//console.log(`hellow my name id is ${name} and my repo is ${repoCount} `)


const  gameName = new String("karsaz")
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("s"))



//**************************string methods */

//string lenght
let text = "karsaz Ahmad"
//console.log(text.length)

//slice
let text1 = "Ahmad Karsaz";
//console.log(text1.slice(3,8))


let text2 = "Apple, Banana, Kiwi";
//console.log( text2.slice(-12));

//**************replace */

let text3 = "Please visit Microsoft!";
//console.log( text3.replace("Microsoft", "W3Schools"));


let text4 = "Please visit Microsoft!";
//console.log(text4.replace(/MICROSOFT/i, "W3Schools")); //using i for case sensitive


let text5 = "Please visit Microsoft and Microsoft!";
console.log( text5.replace(/Microsoft/g, "W3Schools"));  // g is use for global match