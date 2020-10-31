const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./models');
const app = express();


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./router')(app);

const PORT = process.env.PORT || 3000;
db.sequelize.authenticate().then(() => {
    console.log("Connected!");
    db.sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Listing in http://localhost:3000`);
        });
    });
});