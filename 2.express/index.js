const express = require('express')
const app = express()

// req parameters <==
// app.get('/:username', function (req, res) {
//     let {username}=req.params;
//     res.send(`This account belongs to @${username}`)
// });
// query <==
// app.get('/search',(req,res)=>{
//     let {q}=req.query;
//     res.send(`These are the result for : ${q}`);
// });


app.listen(3000)


