const express = require("express");
const mongoose = require('mongoose');
const {mainRouter} = require('./routes/index')

const cors = require('cors')

const PORT = 3000 || process.env.PORT;

mongoose.connect('mongodb+srv://admin:YsdgTkdqWdninDVD@cluster0.9pc7wem.mongodb.net/')
.then(()=> console.log('DB CONNECTION SUCCESS'))
.catch((err)=> console.log(err));


const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1' , mainRouter);





app.listen(PORT , ()=>{
    console.log(`Server Running on 3000`);
})



