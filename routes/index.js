var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'We are going to be free!',
    user: 'Dutch',
    added: new Date(),
  },
  {
    text: 'Yes, we are Dutch!',
    user: 'Bill',
    added: new Date(),
  },
];

// home page
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages,
  });
});

// form page
router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
