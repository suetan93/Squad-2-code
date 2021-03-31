const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/../dist')))

app.get('/test', (req, res) => {
    res.send('Hello Word')
})

app.listen(process.env.PORT || 3000, () => console.log('App Server is listerning on port: ', process.env.PORT || 3000))