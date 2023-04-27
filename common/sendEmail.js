"use strict";
const nodemailer = require("nodemailer");

async function sendEmail(
  email,
  message,
  secondaryMessage = "Use the following OTP to complete your Login procedures.",
  subject = "This Is Your Verification OTP from Osar Pasar",
  anchor = null
) {
  let emailSentSuccessfully = false;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gautamrajat185@gmail.com",
      pass: "sgmrbsvliiazkudt",
    },
  });

  var mailOptions = {
    from: "gautamrajat185@gmail.com",
    to: `${email}`,
    subject: subject,
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #D50000;text-decoration:none;font-weight:600">OSAR PASAR</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing OSAR PASAR.<br/>${secondaryMessage} </p>
      <h2 style="background: #D50000;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${message}<br/>
      ${
        anchor
          ? `Link => <a href=${
              anchor && anchor
            } style='font-size : 15px;color:white;'>${anchor && anchor}</a>`
          : ""
      }</h2>
      <p style="font-size:0.9em;">Regards,<br />OSAR PASAR</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>OSAR PASAR Inc</p>
        <p>Biratnagar, Nepal</p>
      </div>
    </div>
  </div>`,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      emailSentSuccessfully = true;
    }
  });
  return emailSentSuccessfully;
}

module.exports = { sendEmail };
