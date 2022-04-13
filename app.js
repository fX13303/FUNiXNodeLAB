const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
const handlebar = require('express-handlebars')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRouter =  require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.render('404', {pageTitle: 'Error'});
});

app.listen(3000)


