const mongoose =require("mongoose");
const Chat =require("./models/chat.js");


main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>{
        console.log(err);
    });
async function main (){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats=[
    {
        from:"neha",
        to :"priya",
        msg:"send me your exam sheets ",
        created_at:new Date(),
    },
    {
        from:"ekansh",
        to :"priya",
        msg:"send sheets ",
        created_at:new Date(),
    },
    {
        from:"deepanshu",
        to :"tasu",
        msg:"game on kar le  ",
        created_at:new Date(),
    },
    {
        from:"rahul",
        to :"nidhi",
        msg:"clg ayega aaj  ",
        created_at:new Date(),
    },
    {
        from:"tanu",
        to :"annu",
        msg:"send me the operating system notes",
        created_at:new Date(),
    },
];
Chat.insertMany(allChats);
