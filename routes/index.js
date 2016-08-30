var express = require('express');
var router = express.Router();

var emailData = [];

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merge', emailData:emailData });
});

router.post('/', function(req,res,next){
  var recipient = req.body.emails;
  recipient = recipient.split(",");
  var first = recipient[0];
  var last = recipient[1];
  var email = recipient[2];
  var subject = req.body.subject;
  var body = req.body.body;
  emailData.push({first: first, last: last, email: email, subject: subject, body: body});
  res.render('index', {title: 'Mail Merge', emailData: emailData});
});

router.get('/remove/:index', function(req,res,next){
  emailData.splice(req.params.id, 1);
  res.render('index', {title: 'Mail Merge', emailData: emailData});
});

module.exports = router;
