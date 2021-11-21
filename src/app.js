const path=require('path');
const hbs=require('hbs');
const requests=require('requests');
const express=require('express');
const app=express();

const port=process.env.PORT || 4000;

// static Path
const staticPath=path.join(__dirname,'../public');
const tempPath=path.join(__dirname,'../template/views');
const partialsPath=path.join(__dirname,'../template/partials');
app.set("view engine",'hbs');
app.set("views",tempPath);
app.use(express.static(staticPath));

hbs.registerPartials(partialsPath);
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404');
})
app.listen(port,()=>{
    console.log('listining on port 4000');
})