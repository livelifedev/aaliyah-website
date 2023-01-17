export default (req, res) => {
  const formData = require("form-data");
  const Mailgun = require("mailgun.js");
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const { fullName, email, phone, contact, message } = JSON.parse(req.body);

  const emailData = {
    from: `${fullName} <${email}>`,
    to: "johnrubio93@gmail.com",
    subject: "Aaliyah Rubio Website - Enquiry",
    text: `Email, ${email}, Phone: ${phone}, Preferred Contact Method: ${contact}, Message: ${message}`,
  };

  mg.messages
    .create(process.env.MAILGUN_DOMAIN, emailData)
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.error(err)); // logs any error;
};
