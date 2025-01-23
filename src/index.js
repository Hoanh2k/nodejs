const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.get('/', function (req, res) {
    res.render('home')
})

app.get('/news', function (req, res) {
    res.render('news')
})
app.listen(3000)