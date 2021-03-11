var express = require('express');
const model = require('../model')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect((db)=>{
    //查询表
    db.collection('users').find().toArray((err,result)=>{
      if(err){
        console.log(err);
      }
      console.log(result);
    })
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
