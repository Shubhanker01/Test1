const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const user = require('./model')

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello World")
})
app.post('/user', async (req, res) => {
    await user.create({
        "name": req.body.name,
        "email": req.body.email,
        "city": req.body.city,
        "message": req.body.message
    }).then(() => {
        res.send("Your information is send to the admin successfully")
    }).catch((err) => {
        console.log(err)
    })

})

// connecting to mongoose 
async function main() {
    await mongoose.connect('mongodb+srv://shubhanker40:bca02092001@cluster1.ivvgywy.mongodb.net/Admins')
}
main().catch(err => { console.log(err) })
app.listen(port, () => { console.log(`App listening on port:${port}`) })