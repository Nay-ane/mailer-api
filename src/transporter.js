const nodemailer = require('nodemailer')
const handlebars = require('nodemailer-express-handlebars');

transport2 = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "18172964895dff",
      pass: "7e0ef3f4f95a2a"
    },
    tls: {
      rejectUnauthorized: false
    }
});
  

transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "nayane.cr.souza@gmail.com",
    pass: "sh2pUKBH9SvC0jtI"
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.use('compile', handlebars({
  viewEngine: {
      extname: '.handlebars',
      defaultLayout: false
  },
  viewPath: './views/'
}));


module.exports = transporter