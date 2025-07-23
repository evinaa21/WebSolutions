const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'info@websolutions.al',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, business, message, budget, timeline } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields.' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@websolutions.al',
      to: 'info@websolutions.al',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #10b981); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 5px;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${business ? `<p style="margin: 5px 0;"><strong>Business:</strong> ${business}</p>` : ''}
            </div>

            ${budget ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 5px;">Project Details</h3>
              <p style="margin: 5px 0;"><strong>Budget:</strong> ${budget}</p>
              ${timeline ? `<p style="margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
            </div>
            ` : ''}

            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; line-height: 1.6;">${message}</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px;">
                This email was sent from the Websolutions contact form.<br>
                Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'info@websolutions.al',
      to: email,
      subject: 'Thank you for contacting Websolutions!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #10b981); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank You, ${name}!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thank you for reaching out to us! We've received your message and will get back to you within 2 hours during business hours.
            </p>
            
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #374151;">
                <li>We'll review your project requirements</li>
                <li>Schedule a free 15-minute consultation call</li>
                <li>Provide you with a custom proposal</li>
                <li>Start building your dream website!</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                <h3 style="color: #374151; margin: 0 0 10px 0;">Need immediate assistance?</h3>
                <p style="margin: 5px 0; color: #6b7280;">📧 <strong>Email:</strong> info@websolutions.al</p>
                <p style="margin: 5px 0; color: #6b7280;">📞 <strong>Phone:</strong> +355 68 878 8786</p>
                <p style="margin: 5px 0; color: #6b7280;">🌍 <strong>Location:</strong> Tirana, Albania</p>
              </div>
            </div>

            <p style="text-align: center; color: #6b7280; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>The Websolutions Team</strong>
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! We\'ll get back to you within 2 hours.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
