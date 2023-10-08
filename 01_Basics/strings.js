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
//console.log( text5.replace(/Microsoft/g, "W3Schools"));  // g is use for global match




//********************* Question Practice**********************

//1. Write a JavaScript function to check whether an 'input' is a string or not.
// function checkString(){
//     let input = 12;
//     if((typeof input) == "string"){
//         return "yes"
//     }else{
//         return "No"
//     }
// }
// let result = checkString()
// console.log(result);


//2. Write a JavaScript function to check whether a string is blank or not.
  
//   function blankStr(){
//     let str = "karsaz";
//     if(str.length == 0){
//         return "String blank"
//     }else{
//         return "string not blank"
//     }
//   }
//   let result = blankStr();
//   console.log(result);


//3. Write a JavaScript function to split a string and convert it into an array of words.
    
//    let Text = "karsaz Ahamd";
//    let result =Text.split(" ")
//    console.log(result);
//    console.log(result.length);
