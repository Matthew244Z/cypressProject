// Imports
const express = require('express');
const app = express();
const port = 3000;

// Static Files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))


// Set Views
app.get('', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/moves.html', (req, res) => {
    res.sendFile(__dirname + '/view/moves.html')
})

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/view/about.html')
})

// Listen on port 3000
app.listen(port, console.info('Listening to port', port));