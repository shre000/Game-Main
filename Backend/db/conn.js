const mongoose = require("mongoose");
const db = "mongodb+srv://shriancodes:GIAFrbFFwhcLL3VJ@cluster0.yhdhmw7.mongodb.net/Authusers?retryWrites=true&w=majority&appName=AtlasApp"

mongoose.connect(db,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(() => console.log("databse connected")).catch((err)=>{
    console.log(err);
})