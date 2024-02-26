const router = require ('express') ;

const {signup} = require('..Controller/AppContoller.js')

router.post('/user/signup',signup);
router.post('product/getbill',getbill);

module.exports = router ; 