// import nodemailer from "nodemailer";
// const email = process.env.NEXT_PUBLIC_GMAIL;
// const password = process.env.NEXT_PUBLIC_GMAIL_PASSWORD;

// export const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: email,
//         pass: password,
//     },
// });

// export const mailOptions = {
//     from: {
//         name: "Divinely Developer Portfolio",
//         address: ''

//     },
//     to: email,
//     subject: "",
//     text: "",
// };

import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});
