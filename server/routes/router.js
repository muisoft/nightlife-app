const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const Food = require('mongoose').model('Food');
const {
  signup, addGoing, searchFoods
} = require('./utils');

var router = express.Router();

const redir = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/';

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.redirect(redir);
  }
}

router.get('/signout', (req, res) => {
    req.logout();
    res.json({ success: true});
})

router.get('/auth/twitter', (req, res, next) => {
  return passport.authenticate('twitter-login')(req, res, next);
})

router.get('/auth/twitter/callback',
      passport.authenticate('twitter-login', { failureredirect: redir + 'account/login'}),
      (req, res) => {
        res.redirect(redir + 'allbooks')
      })

router.post('/signin', (req, res, next) => {

  return passport.authenticate('local-signin', (err, user) => {
    req.logIn(user, err => {
      return res.json(user);
    })

  })(req, res, next);
});

router.post('/signup', (req, res) => {
  signup(req, res);
})

router.post('/addgoing', (req, res) => {
  addGoing(req, res);
});

router.post('/search', (req, res) => {
  searchFoods(req, res);
})
module.exports = router;
