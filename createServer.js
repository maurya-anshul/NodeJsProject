const express=require("express");
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contactUs')

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','error.html'));
})
app.listen(4000,()=>{
    console.log('server started');
});