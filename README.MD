
# CrossWord (Online BookStore)

### Run Locally on Your Machine
You need NodeJs, NPM and MongoDB properly installed.

* Clone this repository
``` shell
    git clone https://github.com/kishan79/CrossWord.git
```
* Setup the environment variables replacing <MONGODB-PORT> with your mongodb port, usually is 27017.
``` shell
    mongoose.connect("mongodb://localhost:27017/book", {useNewUrlParser: true});
```
* Install dependencies
``` shell
    npm install
```

* With your mongod service running, this will populate shopping database
``` shell
    node seed/book-seeder.js 
```
* This will start dev server at http://localhost:3000
``` shell
    npm start
```
### Technologies
###### Back-end
NodeJS, Express, MongoDB, Mongoose and JSON. 
###### Front-end
Handlebars, Bootstrap and jQuery.