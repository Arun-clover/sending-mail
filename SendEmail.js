const { text } = require('body-parser');
const nodemailer=require('nodemailer');

const SendEmail=async (to,subject,message)=>{
    try{
        const transport=nodemailer.createTransport({
            host:"example.gmail.com",//replace your host id
            port:587,
            secure:false,
            auth:{
                user:"your email address", // replace with your gmail
                pass:"gmail password" //replace with your google email App password
            },
            tls:{
                rejectUnauthorized:false
            }
        });
        
        const mailOps={
            from:"your email address", // replace with your email address
            to,
            subject,
            text:message
        }
        let info=await transport.sendMail(mailOps);
        console.log("Email Sent:"+info.messageId)
    }catch(error){
        console.error("Error is occured in mail sending:"+error);
    }
}

module.exports=SendEmail;