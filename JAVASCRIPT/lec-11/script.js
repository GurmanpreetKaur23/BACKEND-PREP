// function outerFunction() {
//     let outer = "outer fnc" ;

//     function innerFunction() {
//         console.log(outer) ;
//     }
//     return innerFunction ;
// }

// const closureEg = outerFunction() ;
// closureEg() ;


// ------------------------------

// function x() {
//     var a = 7 ;

//     function y() {
//         console.log(a) ;
//     }
//     return y ;
// }

// var z = x() ;
// console.log(z) ;

// ------------------------

// function x() {
//     var a = 7 ;

//     function y() {
//         console.log(a) ;
//     }
//     return y ;
// }

// var z = x() ;
// console.log(z) ;
// z() ;

// -------------------------

function z(){
    var b = 10;
        function x() {
        var a = 7 ;

        function y() {
            console.log(a ,b) ;
        }
        y() ;
    }
    x() ;
}
z() ;
