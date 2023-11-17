const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send({
    name_kya_hai: "Bhupendra Jogi",
    skills_kon_kon_shi_hai : "Bhot hai",
    Name_batao : "Bhupendra Jogi"
  })
})

app.listen(3000)


