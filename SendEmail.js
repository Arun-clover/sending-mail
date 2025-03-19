const { text } = require('body-parser');
const nodemailer=require('nodemailer');

const SendEmail=async (to,subject,message)=>{
    try{
        const transport=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:"arunkumarkarna.2104@gmail.com",
                pass:"gcbf onju lmmu rfio"
            },
            tls:{
                rejectUnauthorized:false
            }
        });
        
        const mailOps={
            from:"arunkumarkarna.2104@gmail.com",
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