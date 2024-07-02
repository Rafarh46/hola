'use server';

import { ServerActionResponse } from '@/src/common-types';
import nodemailer from 'nodemailer';
import { ContactUsSchemaType } from '..';

export async function contactUsFormSubmit(
  values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
  const {email} = values;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_MAIL_ADDRESS,
        pass: process.env.CONTACT_MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_MAIL_ADDRESS,
      html: `
        <h3 style="margin-bottom:8px">Name:</h3>
        <p style="margin:0">${name}</p>
        <br/>
        <h3 style="margin:0; margin-bottom:8px">Email:</h3>
        <p style="margin:0">${email}</p>
        <br/>
        <h3 style="margin:0; margin-bottom:8px">Body:</h3>
        
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      isSuccess: true,
      data: true,
      message: 'Gracias por Suscribirte',
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      data: null,
      message: 'Error',
    };
  }
}
