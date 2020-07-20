const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

//Mongoose
//---------------------------------
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/books', {
    useNewUrlParser: true, useUnifiedTopology: true
});
//---------------------------------

//Using routes
app.use(require("./routes/api-routes"))

app.listen(PORT, err => {
    if (err) throw err
    console.log(`server started on port: ${PORT}`)
})