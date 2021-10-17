const express= require('express')
const gamecontroller=require('./../controller/game.controller')



const router=express.Router()


router.get('/',gamecontroller.getgames)

module.exports=router