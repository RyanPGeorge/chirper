var express = require('express');
var router = express.Router();
var postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);

/*--- Helper Functions ---*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
