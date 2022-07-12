const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const authMod = require('../middleware/auth-mod')
const multer = require('../middleware/multer-config')

const postCtrl = require('../controllers/post');

router.get('/', auth, postCtrl.HomePage);
router.get('/', auth, postCtrl.getSinglePost)
router.post('/create', auth, multer, postCtrl.CreatePost);
router.post('/:id/like', auth, postCtrl.LikePost);
router.post('/:id/hide', authMod, postCtrl.ModeratePost);
router.post('/:id/comment', auth, postCtrl.AddCommentToPost);
router.get('/:id/comments', auth, postCtrl.ShowCommentToPost);

module.exports = router;