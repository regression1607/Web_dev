const express =require("express");
const app =express();
const path =require("path");

const port =8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req,res)=> {
    res.render("home.ejs");
})
app.get("/ig/:username", (req,res)=> {
    let {username}=req.params;
})

app.listen(port, () => {
    console.log(`listening the ${port}`);
});