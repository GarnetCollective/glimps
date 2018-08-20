import mailer from "nodemailer";

const { MAILER_EMAIL, MAILER_PASSWORD } = process.env;

const smtp = mailer.createTransport({
  service: "gmail",
  auth: { user: MAILER_EMAIL, pass: MAILER_PASSWORD }
});

const sendMail = (email, message) => {
  return new Promise(async (resolve, reject) => {
    let options = {
      from: "<mail@glimps.app>",
      to: email,
      subject: "Glimps mail.",
      text: message
    };

    smtp.sendMail(options, (err, info) => {
      if (err) reject(err.message);

      smtp.close();
      resolve(info.envelope);
    });
  });
};

export { sendMail };
