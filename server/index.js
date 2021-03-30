const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || PORT

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
    res.send('Hello Word')
})

app.listen(PORT, () => console.log('App Server is listerning on port: ', PORT))