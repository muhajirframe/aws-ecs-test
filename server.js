const express = require('express')
const app = express()

app.get('/', (req,res) => {
	res.send('Hello ECS')
})

app.listen(3000, () => {
	console.log('Sever is up on 3000')
})

