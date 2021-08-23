var nodemailer=require('nodemailer')

var transporter=nodemailer.createTransport({
service:'gmail',
auth:{
    user:'waseemahmed116@gmail.com',
    pass:'ghgh'
}

});

var mailOptions={
    from:'waseemahmed116@gmail.com',
    to:'pravi.madagoni@gmail.com',
    subject:'hello this is node class',
    text:'did u had beakfast'
};
transporter.sendMail(mailOptions,(err,info)=>{

    if(err){
        console.log("ur mail was not send",err)
    }else{
        console.log("mail sent")
    }
})