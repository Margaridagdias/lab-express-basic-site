const express = require('express');
const app = express() // REPRESENTS ou server

app.use(express.static('public'));


//Creating a route /home
app.get('/home', (request, response) => {
    
    response.sendFile(__dirname + '/views/home.html');

});

app.get('/works', (request, response) => {
    console.log('dirname',__dirname);
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', (request, response) => {
    console.log('dirname',__dirname);
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('/about', (request, response) => {
    console.log('dirname',__dirname);
    response.sendFile(__dirname + '/views/about.html');
});



app.listen(3000, () => {
    console.log('BEYONCÉ WORLD');
});

