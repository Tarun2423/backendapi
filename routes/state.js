const router=require('express').Router();
const {insert,getState,update}=require("../controller/State")
// const update=require("../controller/State")


router.post('/insert',insert)
router.get('/getStates',getState)
router.post('/update',update)




module.exports = router