import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9e7e7f9f0d57e6",
    pass: "3cf16d6e77bbca"
  }
});

export class NodemailMailerAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'João Pedro <joao.devweb@gmail.com>',
      subject,
      html: body,
    })
  };
}