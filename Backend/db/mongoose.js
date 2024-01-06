const mongoose = require('mongoose');
mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/MyQuizAppDB').then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error connecting to MongoDB");
    console.log(e);
});


module.exports = {
    mongoose
};
