import { createTransport } from 'nodemailer'

export function handler(event, context, callback) {
  const parsedBody = JSON.parse(event.body)
  const { fname, lname, email, message } = parsedBody
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'alexis@restorationbrow.com',
      pass: 'RestorationBrow1991',
    },
  })
  const mailResponse = {
    from: 'alexis@restorationbrow.com',
    to: email,
    subject: 'Thank You For Contacting Me',
    html:
      '<p>We have received your message. We will get back to you as soon as we can.  Response times are usually within 24 hours.</p>',
  }
  const mailSent = {
    from: 'alexis@restorationbrow.com',
    to: 'alexis@restorationbrow.com',
    subject: 'Website Contact Form',
    html: `<p>New Contact Submission!</p><p>Name: ${fname} ${lname}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  }
  transporter.sendMail(mailResponse, function(err, info) {
    if (err) {
      console.log(err)
    }
    transporter.sendMail(mailSent, function(err, info) {
      if (err) {
        callback(null, { statusCode: 400, body: 'Message Failed!' })
      }
      callback(null, { statusCode: 200, body: 'Message Sent!' })
    })
  })
}
