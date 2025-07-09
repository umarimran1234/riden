import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, phone, message }: ContactFormData = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Validate phone format (basic validation for numbers, allowing + and digits)
        if (!/^[+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-]/g, ''))) {
            return NextResponse.json(
                { success: false, message: 'Invalid phone number' },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.trim().length < 10) {
            return NextResponse.json(
                { success: false, message: 'Message must be at least 10 characters long' },
                { status: 400 }
            );
        }

        console.log(process.env.SMTP_USER, process.env.SMTP_PASS)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Format email content
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #F80F0F;">New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 1px solid #EAEAEA; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">
          This email was sent from the Riden Contact Us form. Please respond promptly to assist the user.
        </p>
        <p style="font-size: 12px; color: #666;">
          Riden Support Team | 219/15850 26 ave Vancouver, Canada
        </p>
      </div>
    `;

        // Send email
        await transporter.sendMail({
            from: `"Riden Support" <${process.env.SMTP_USER}>`,
            to: 'umartkd989@gmail.com',
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: htmlContent,
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error: any) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { success: false, message: 'Email sending failed', error: error.message },
            { status: 500 }
        );
    }
}