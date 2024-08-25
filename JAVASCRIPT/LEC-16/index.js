// setTimeout() 
// console.log("start") ;
// setTimeout(function cb(){
//     console.log("callback") ;
// },5000) ;
// console.log("end") ;

// -------------------------------

// DOM APIs
// console.log("START") ;
// document.getElementById("btn") 
// .addEventListener("click" , function cb() {
//     console.log("callback") ;
// }) ;

// console.log("end") ;

// ------------------------------------


// fetch() 
console.log("Start") ;
setTimeout(function cbT() {
    console.log("CB SetTimeout") ;
},5000) ;

fetch("https://api.netflix.com") 
.then(function cbF() {
    console.log("CB Netflix") ;
}) ;

console.log("end") ;
