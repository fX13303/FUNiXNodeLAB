const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
const handlebar = require('express-handlebars')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRouter =  require('./routes/shop');
const errorController = require('./controllers/error');

const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use(errorController.get404);

app.listen(3000)


