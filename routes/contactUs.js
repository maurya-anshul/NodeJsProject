
const express=require('express');
const path=require('path');

const router=express.Router();

router.get('/contactUs',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','view','contactUs.html'))
})
router.post('/success',(req,res,next)=>{
    res.send('<h2>Form Successfully Filled</h2>')
})
module.exports=router;