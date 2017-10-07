const express = require('express')
const { twig } = require('twig')

const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')


app.get('/', homeController.index)
/*app.get('/'/*เรียนว่าเล้า หน้าที่ชี้ให้เราดูว่าเราดึงข้อมูลมาจากตรงไหนบ้าง*//*, function(req, res) {
	/*res.send('Hello')/*มันจะคล้ายๆโมเดลที่เอาไว้โชให้เราสามารถเห็นได้*//*})*/
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))

app.listen(8000, function(err) {
	console.log('Server is running on port 8000')
})