const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var express = require('express');
// var router = express.Router();
// const Post = require('../models/post');
//  
// const postSchema = new Schema({
//     color1: { type: String , required: true},
//     color2: { type: String },
//   color3: { type: String },
//   color4: { type: String },
//   color5: { type: String }
// });
//  
// var Post = mongoose.model('Post', postSchema);
// module.exports = Post;
// 
//  
//  
// router.post('/new', (req, res) => {
//     var post = new Post(req.body);
//  
//     post.save(function(err, user) {
//         if(err) console.log(err);
//         return res.send("Success! Your post has been saved.");
//     });
// });
// 
// 
  
app.use(bodyParser.json());
  
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
  
app.post("/userdata", function (req, res) {
    console.log(req.body);
});
  
