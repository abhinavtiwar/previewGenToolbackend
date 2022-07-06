const mongoose = require('mongoose');

const db_name2="minormttf500";
const url=`mongodb+srv://Abhinav:8052339892@cluster0.9sram.mongodb.net/${db_name2}?retryWrites=true&w=majority`;

// it will return promise
mongoose.connect(url)
.then((result) => {
    console.log("database connected");
}).catch((err) => {
    console.error(err);
});
module.exports=mongoose; 