const mongoose = require('mongoose');

mongoose
    .connect(`mongodb://localhost:/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(
            "Connected to database.\nYou're all clear kid, now let's blow this thing and go home!",
        );
    })
    .catch(err => console.log('Database connection failed.', err));
