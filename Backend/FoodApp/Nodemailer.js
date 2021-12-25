let nodemailer = require('nodemailer');

module.exports = async (user) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'harjassodhi50@gmail.com',
            pass: "oqmbceivrluhyjmi",
        },
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <harjassodhi50@gmail.com>', // sender address
        to: "harjassodhi9@gmail.com", // list of receivers
        subject: "thanks for signing up ✔", // Subject line
        text: `hello ${user.name}`, // plain text body
        html: `<b>${user.email}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

