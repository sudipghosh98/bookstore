var Book = require('../models/book');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/book", {useNewUrlParser: true});

var books = [
    new Book({
        imagePath: 'https://r1.ilikewallpaper.net/ipad-wallpapers/download/10737/Game-Of-Thrones-ipad-wallpaper-ilikewallpaper_com.jpg',
        title: 'Game of Thrones',
        description: 'Awesome Book!!!!',
        price: 150 
    }),
    new Book({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/ThingsFallApart.jpg/220px-ThingsFallApart.jpg',
        title: 'Things Fall Apart',
        description: 'Chinua Achebe!!!!',
        price: 200 
    }),
    // new Book({
    //     imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/William-Strang-Sindbad-AliBaba-titlepage.JPG/220px-William-Strang-Sindbad-AliBaba-titlepage.JPG',
    //     title: 'Sinbad the sailor and Ali Baba and the forty thieves',
    //     description: 'Awesome Book!!!!',
    //     price: 250 
    // })
];

var done = 0;
for(var i=0; i<books.length; i++){
    books[i].save(function(err,result){
        done++;
        if(done === books.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

