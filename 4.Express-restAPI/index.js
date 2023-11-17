const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4:uuidv4}=require('uuid');
const  methodOverride = require("method-override");
app.use(express.urlencoded({ extended :true}));

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"public")));

let students =[
    {
        id:uuidv4(),
        name : "Ram",
        college : "ABES",
        roll: 1,
    },
    {
        id:uuidv4(),
        name : "krishna",
        college : "ABES",
        roll: 2,
    },
    {
        id:uuidv4(),
        name : "Radha",
        college : "ABES",
        roll: 3,
    },
];
app.get("/students",(req,res)=>{
    res.render("index.ejs",{students});
});
app.get("/students/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/students",(req,res)=>{
    let { name,college,roll} =req.body;
    let id =uuidv4();
    students.push({id,name,college,roll});
    res.redirect("/students");
});
app.get("/students/:id",(req,res)=>{
    let{id}=req.params;
    let student = students.find((s) => id === s.id);
    res.render("show.ejs",{student});
});
app.patch("/students/:id",(req,res)=>{
    let{id}=req.params;
    let newroll= req.body.roll;
    let student = students.find((s) => id === s.id);
    student.roll=newroll;
    console.log(student);
    res.send("patch request working");
    res.redirect("/students");
});
app.get("/students/:id/edit",(req,res)=>{
    let{id}=req.params;
    let student = students.find((s) => id === s.id);
    res.render("edit.ejs",{student});
});
app.delete("/students/:id",(req,res)=>{
    let{id}=req.params;
    students = students.filter((s) => id !== s.id);
    res.redirect("/students");
});

app.listen(port,()=>{
    console.log("listening the post 8080");
});  


