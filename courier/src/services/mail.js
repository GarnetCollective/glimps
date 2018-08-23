import mailer from "nodemailer";

const { MAILER_EMAIL, MAILER_PASSWORD } = process.env;

const smtp = mailer.createTransport({
  service: "gmail",
  auth: { user: MAILER_EMAIL, pass: MAILER_PASSWORD }
});

const sendMail = async (email, message) => {
  let options = {
    from: "<mail@glimps.app>",
    to: email,
    subject: "Glimps mail.",
    text: message
  };

  let { envelope } = await smtp.sendMail(options);

  return envelope;
};

export { sendMail };
