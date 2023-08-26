const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/loginSystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,     // Use the new server discovery and monitoring engine.
})

// Assign the established connection to the variable 'db'.
db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up an event listener for the 'open' event on the database connection.
db.once('open', () => {
    console.log('Connected to MongoDB successfully!');
});

// Export the 'db' variable, making it available for other modules to use.
module.exports = db;