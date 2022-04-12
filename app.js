const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouter =  require('./routes/shop');

const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "pagenotfound.html"));
});

app.listen(3000)


