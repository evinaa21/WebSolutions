# 🚀 Websolutions - Custom-Coded Websites for $100/month

A modern, responsive web development agency website built with React, Tailwind CSS, and Node.js.

## ✨ Features

- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Mobile-first approach, works on all devices
- **Fast**: Built with Vite for lightning-fast development and builds
- **Animated**: Smooth animations using Framer Motion
- **Contact Form**: Working contact form with email notifications
- **Portfolio**: Dynamic portfolio section with filtering
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/websolutions.git
cd websolutions
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure environment variables

```bash
# In the server directory
cp .env.example .env
# Edit .env with your Gmail credentials
```

### 5. Start the development servers

**Frontend (in root directory):**

```bash
npm run dev
```

**Backend (in server directory):**

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:5000`

## 📧 Email Configuration

To enable the contact form:

1. Use a Gmail account for sending emails
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
4. Add credentials to `server/.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## 📱 Contact Information

- **Phone**: +355 68 878 8786 (Albania)
- **Email**: info@websolutions.al
- **Location**: Tirana, Albania

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ }
}
```

### Content

- Update contact info in `src/components/Footer/Footer.jsx`
- Modify portfolio items in `src/data/portfolio.json`
- Change testimonials in `src/data/testimonials.json`

## 📦 Build for Production

### Frontend

```bash
npm run build
```

### Backend

```bash
cd server
npm start
```

## 📁 Project Structure

```
websolutions/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── context/         # React context
│   ├── data/            # JSON data files
│   └── css/             # Stylesheets
├── server/              # Backend server
│   ├── server.js        # Express server
│   ├── package.json     # Backend dependencies
│   └── .env.example     # Environment variables template
└── README.md            # This file
```

## 🌟 Key Features

### Performance

- 99+ PageSpeed score
- Optimized images and assets
- Minimal JavaScript bundle
- CSS-only animations where possible

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### SEO

- Meta tags optimization
- Structured data
- Fast loading times
- Mobile-friendly design

## 🛡️ Security

- Environment variables for sensitive data
- CORS protection
- Input validation
- Rate limiting (recommended for production)

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

### Backend (Heroku/Railway/DigitalOcean)

1. Set environment variables on your hosting platform
2. Deploy the `server` directory
3. Update the API URL in the frontend

## 📞 Support

Need help with customization or have questions?

- **Call/WhatsApp**: +355 68 878 8786
- **Email**: info@websolutions.al
- **Response time**: Within 2 hours during business hours

## 📄 License

This project is proprietary software created for Websolutions. All rights reserved.

---

**Built with ❤️ in Tirana, Albania**
