const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const gamesRoute = require('./routes/games');
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());
app.use('/api/v1/games', gamesRoute);


const startApp = () => {
    try {
        connectDB(process.env.MONGO_URL);
        const port = 5000
        app.listen(port, () => { console.log(`app is listening on port: ${port}`) });
    } catch (error) {
        console.log(error);
    }
}
startApp();