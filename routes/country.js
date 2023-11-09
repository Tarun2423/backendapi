const router=require('express').Router();
const {insert,getCountry}=require("../controller/Country")

router.post('/insert',insert)
router.get('/getCountry',getCountry)




module.exports = router