const express= require('express')
const userscontroller=require('./../controller/users.controller')
const validator=require('./../validators/users.validators')


const router=express.Router()


router.get('/',[validator.user],userscontroller.getusers)
router.post('/',[validator.commercial],userscontroller.postcommercial)
router.patch('/',[validator.schedule],userscontroller.updateschedulevacations)
router.delete('/',[validator.video],userscontroller.deletevideo)

module.exports=router