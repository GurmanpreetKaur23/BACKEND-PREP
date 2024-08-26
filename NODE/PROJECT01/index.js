const express = require("express") ;
const users = require("./MOCK_DATA.json") ; // https://mockaroo.com/ -> random data generated
const app = express() ;
const PORT = 8000 ;


// Routes
// app.get("/users" , (req , res)=>{
//     return res.json(users) ;
// }) ;

// -------------------------------

// app.get("/api/users" , (req , res)=>{
//     return res.json(users) ;
// }) ;

// -------------------------------

// to return as a html file
// app.get("/users" , (req,res) => {
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`)}
//     </ul>
//     `;
//     res.send(html) ;
// })

// -------------------------------

// Dynamic Path Parameters
// get by id
// app.get("/api/users/:id" , (req,res)=> {
//     // const id = req.params.id ; // string hai to convert it in number
//     const id = Number(req.params.id) ;
//     const user = users.find((user) => user.id===id) ;
//     return res.json(user) ;
// })

// -------------------------------

// create the user with id
// app.post('/api/users/:id' , (req,res) => {
//     return res.json({status : "Pending"})
// }) ;

// -------------------------------

// edit the user with id
// app.put('/api/users/:id' , (req,res) => {
//     return res.json({status : "Pending"})
// }) ;

// -------------------------------

// delete the user with id
// app.delete('/api/users/:id' , (req,res) => {
//     return res.json({status : "Pending"})
// }) ;

// -------------------------------

// grouping of routes
app
    .route("/api/users/:id")
    .get((req , res) => {
        const id = Number(req.params.id) ;
        const user = users.find((user) => user.id===id) ;
        return res.json(user) ;
    })
    .patch((req,res) => {
        // edit user with id
        return res.json({status : "Pending"}) ;
    })
    .delete((req,res) => {
        // delete user with id
        return res.json({status : "Pending"}) ;
    }) ;


app.listen(PORT , () => console.log(`Server Started at port 8000`)) ;
