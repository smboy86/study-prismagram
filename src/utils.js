import dotenv from "dotenv";
import path from "path";

import { adjectives, nouns } from "./words";

import nodemailer from "nodemailer";

import sgTransport from "nodemailer-sendgrid-transport";
import { g_id, g_pw } from "./gmail";
import mgTransport from "nodemailer-mailgun-transport";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = email => {
  // 1. nomad sendmail
  // const options = {
  //   auth: {
  //       api_user: process.env.SENDGRID_USERNAME,
  //       api_key: process.env.SENGRID_PASSWORD
  //   }
  // };

  // const client = nodemailer.createTransport(sgTransport(options));

  // 2. gmail - myAccount - max 500??
  // const options = {
  //   service: "gmail",
  //   secure: "false",
  //   port: 25,
  //   auth: {
  //     user: g_id,
  //     pass: g_pw
  //   },
  //   tls: {
  //     rejectUnauthorized: false
  //   }
  // };
  // const client = nodemailer.createTransport(options);

  // 3. nomad mailgun
  const options = {
    auth: {
      api_key: "8d93542f21a97f1fe6dad19a3320458c-f8b3d330-9ed79b6a",
      domain: "sandbox2205adab63284ca9b3a8d57b8489c1b4.mailgun.org"
    }
  };

  const client = nodemailer.createTransport(mgTransport(options));

  return client.sendMail(email, function(error, info) {
    if (error) {
      console.log("######" + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "smboy86@naver.com",
    to: adress,
    subject: "Login Secret for Prismagram ~~~ ",
    html: `Hello! Your login secret it ${secret}.<br/>Copy paste on the app/website`
  };

  return sendMail(email);
};
