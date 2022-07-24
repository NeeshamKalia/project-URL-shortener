const express =  require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./route/route')


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))



const monngodb_url="mongodb+srv://neesh:E8DNG8XaM4rrzJCV@cluster0.vlwog.mongodb.net/group46Database";

mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Hi! MongoDB is connected Now ");
}).catch((error)=>{
    console.log("Sorry! MongoDB is not connected");
    console.log(error);
});


app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
