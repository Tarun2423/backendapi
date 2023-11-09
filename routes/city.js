const router=require('express').Router();
const {insert,getCity,update}=require("../controller/City")


router.post('/insert',insert)
router.get('/getCities',getCity)
router.post('/update',update)




module.exports = router