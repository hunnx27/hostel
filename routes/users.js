var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// db authentication info
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || '';
const database = process.env.DB_DATABASE || 'twitter_clone';
const query = "select * from tweets";

console.connect(function(err){
  if(err) throw err;

  console.query(query, (err, result, fields) => {
    if(err) throw err;

    console.log(result);
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
