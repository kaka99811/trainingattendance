const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require ('body-parser');
const passport = require(passport);

const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Ket noi den MongoDB thanh cong'))
    .catch(err => console.log(err));

app.get('/' , (req, res) => res.send('Fis HCM'));

// bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);
// passport
app.use(passport.initializa());
// passport config
require('./config/passport')(passport);
const port = process.env.PORT || 1234;
app.listen(port , () => console.log(`Server dang khoi dong tai cong ${port}`))