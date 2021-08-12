const express = require('express');
const router = express.Router();
var formatDistanceToNow = require('date-fns/formatDistanceToNow');

const messages = [
  {
    text: 'We are going to be free!',
    user: 'Dutch',
    added: formatDistanceToNow(new Date(2021, 7, 8), { addSuffix: true }),
  },
  {
    text: 'Yes, we are Dutch!',
    user: 'Bill',
    added: formatDistanceToNow(new Date(2021, 7, 12), { addSuffix: true }),
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
    added: formatDistanceToNow(new Date(), { addSuffix: true }),
  });

  res.redirect('/');
});

module.exports = router;
