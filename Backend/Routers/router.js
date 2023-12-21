const express = require('express');
const router = express.Router();
const Item = require('../Module/Schema/Login');
const {postSignUp,getSignUp,getSignUpid,updateSignUp,deleteSignUp} = require('../Controller/Register')
const {postSignin,getSignin,getSigninid,updateSignin,deleteSignin} = require('../Controller/login');

//SignIn
router.post('/signin/item',postSignin)
router.get('/signin/items',getSignin)
router.get('/signin/item/:id',getSigninid)
router.put('/signin/item/:id',updateSignin)
router.delete('/signin/item/id',deleteSignin)

// SignUp
router.post('/signup/item',postSignUp)
router.get('/signup/items',getSignUp)
router.get('/signup/item/:id',getSignUpid)
router.put('/signup/item/:id',updateSignUp)
router.delete('/signup/item/id',deleteSignUp)







module.exports = router;
