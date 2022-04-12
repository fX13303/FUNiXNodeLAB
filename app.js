const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
const handlebar = require('express-handlebars')

const app = express();

app.engine('hbs', handlebar())
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouter =  require('./routes/shop');

const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.render('404', {pageTitle: 'Error'});
});

app.listen(3000)


