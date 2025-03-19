const express=require('express');
const app=express();
const path=require('path');
const PORT=process.env.PORT || 5000;
const bodyparser=require('body-parser');
const SendEmail=require('./SendEmail');

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

app.post('/SendEmail',async(req,res)=>{
    const {to,subject,message}=req.body;
    if(!to || !subject || !message){
       return res.status(404).json({
        message:"All fields are required please fill them"
       })
    }
   try{
       const send=await SendEmail(to,subject,message);
       res.status(200).json({message:"Email send"});
   }catch(error){
    console.error("error in posting:"+error);
   }
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"SendPage.html"));
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})