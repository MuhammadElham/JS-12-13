// Q#1
// var enter = prompt("Enter the Value:");
// // var enter = "A";
// if (enter >= "A" && enter <= "Z") {
//   // console.log(enter + " is an UpperCase");
//   document.write(enter + " is an UpperCase");
// } else if (enter >= "a" && enter <= "z") {
//   // console.log(enter + " is a LowerCase");
//   document.write(enter + " is a LowerCase");
// } else {
//   // console.log(enter + " is a Number");
//   document.write(enter + " is a Number");
// }
// Q#2
// var num1 = +prompt("Enter 1st number = ");
// var num2 = +prompt("Enter 2nd number = ");
// if (num1 > num2) {
//   // console.log(num1 + " is greater than " + num2);
//   document.write(num1 + " is greater than " + num2);
// } else if (num1 < num2) {
//   // console.log(num1 + " is greater than " + num2);
//   document.write(num1 + " is smaller than " + num2);
// } else{
//   // console.log(num1 + " and is Equal " + num2);
//   document.write(num1 + " and " + num2 + " is Equal");
// }
// Q#3
// var enter = +prompt("Enter the Number:");
// if (enter === 0) {
//   console.log("You Enter = " + enter);
// } else if (enter > 0) {
//   console.log("You Enter = Positive Number");
// } else {
//   console.log("You Enter = Negative Number");
// }
// Q#4
// var enter = prompt("Enter the Char:");
// var match = true;
// var vowels = ["a", "e", "i", "o", "u"];
// for (i = 0; i < vowels.length; i++) {
//   if (enter == vowels[i]) {
//     match = false;
//     document.write(true + " you enter vowels");
//   }
// }
// if (match === true) {
//   document.write(false + " you donot enter vowels");
// }
// Q#5
// var pass = "HelloWorld";
// var enter = prompt("Enter Password:")
// if (enter === "") {
//   document.write("<h1>Please Enter the Password</h1>");
// } else if (pass === enter) {
//   document.write("<h1>Correct!</h1>");
// } else {
//   document.write("<h1>Incorrect!</h1>");
// }
// Q#6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// }
// Q#7
// var time = +prompt("Enter Time:");
// if (time >= 0 && time < 1200) {
//   document.write("<h1>Good Morning!</h1>");
// } else if (time >= 1200 && time < 1700) {
//   document.write("<h1>Good Afternoon!</h1>");
// } else if (time >= 1700 && time < 2100) {
//   document.write("<h1>Good Evening!</h1>");
// } else if (time >= 2100 && time <= 2359) {
//   document.write("<h1>Good Night!</h1>");
// }
