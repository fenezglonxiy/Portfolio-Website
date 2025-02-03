"use server";

import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

type SendEmailParams = {
  /**
   * The email address of the sender.
   */
  from: string;

  /**
   * The email address of the receiver.
   */
  to?: string;

  /**
   * The name of the sender.
   */
  senderName: string;

  /**
   * The subject of the email.
   */
  subject: string;

  /**
   * The message of the email.
   */
  text: string;

  /**
   * The html version of the email.
   */
  html?: string;
};

const sendEmail = async ({
  from,
  to,
  senderName,
  subject,
  text,
  html,
}: SendEmailParams) => {
  const info = await transporter.sendMail({
    from: `"${senderName}" <${from}>`,
    to: to || SITE_MAIL_RECEIVER,
    subject,
    text,
    html,
  });

  return info;
};

export default sendEmail;
