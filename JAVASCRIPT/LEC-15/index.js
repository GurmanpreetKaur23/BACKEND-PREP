// callback function

// setTimeout(function(){
//     console.log("timer") ;
// },3000) ;

// function x(y) {
//     console.log("x") ;
//     y() ;
// } 

// x(function y(){
//     console.log("y") ;
// })

// event listeners
// document.getElementById("clickMe").addEventListener("click" , function xyz(){
//     console.log("button clicked") ;
// })

// let count = 0;
// document.getElementById("clickMe").addEventListener("click" , function xyz(){
//     console.log("button clicked" , ++count) ;
// })

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click" , function xyz(){
        console.log("button clicked" , ++count) ;
    }) ;
}
attachEventListeners() ;
