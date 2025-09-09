# BTCSA - Bitcoin Service Association

A premium Bitcoin domain portfolio and professional services platform landing page.

## Overview

BTCSA (Bitcoin Service Association) is a comprehensive platform showcasing:
- 17 premium Bitcoin-related domains
- Professional Bitcoin services directory
- Mailing list functionality for network building
- Domain portfolio available for purchase

## Features

### 🌐 Premium Domain Portfolio
- **17 Strategic Domains**: btcsa.cc, btcsa.email, btcsa.info, btcsa.life, btcsa.me, btcsa.biz, btcsa.world, btcsa.vip, btcsa.services, btcsa.agency, btcsa.club, btcsa.pro, btcsa.art, btcsa.online, btcsa.shop, btcsa.store, btcsa.xyz
- Each domain positioned for specific Bitcoin use cases
- Click-to-copy functionality for easy sharing

### 📧 Professional Mailing List
- Real-time email collection and validation
- Backend API with Express.js
- Fallback to localStorage if API unavailable
- Admin panel for email management

### 🏢 Service Categories
- Business Solutions
- Education & Training
- Professional Network
- Lightning Services
- Security Consulting
- Market Analytics

### 💼 Purchase Opportunities
- Individual domain sales
- Complete portfolio acquisition
- Partnership opportunities
- Professional contact channels

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Storage**: JSON file storage (easily upgradeable to database)
- **Styling**: Modern CSS with gradients, animations, and responsive design

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Start Production Server**
   ```bash
   npm start
   ```

4. **Visit the Site**
   ```
   http://localhost:3000
   ```

## API Endpoints

### Public Endpoints
- `GET /` - Main website
- `POST /api/subscribe` - Subscribe to mailing list
- `GET /api/subscribers/count` - Get subscriber count
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission

### Admin Endpoints
- `GET /api/admin/emails` - View all emails (requires auth header)

### Authentication
Admin endpoints require header: `Authorization: Bearer btcsa-admin-2025`

## Email Management

### View Subscribers (Console)
```javascript
// In browser console
btcsaAdmin.viewEmails()
```

### Export Email List
```javascript
// In browser console
btcsaAdmin.exportEmails()
```

### Clear Email List
```javascript
// In browser console
btcsaAdmin.clearEmails()
```

## Domain Portfolio

| Domain | Purpose | Use Case |
|--------|---------|----------|
| btcsa.cc | Creative Commons | Community & Open Source |
| btcsa.email | Communication | Professional Email Services |
| btcsa.info | Information | Resources & Documentation |
| btcsa.life | Lifestyle | Community & Personal |
| btcsa.me | Personal | Individual Branding |
| btcsa.biz | Business | Commercial Services |
| btcsa.world | Global | International Platform |
| btcsa.vip | Premium | Exclusive Services |
| btcsa.services | Directory | Service Marketplace |
| btcsa.agency | Professional | Consulting & Agency |
| btcsa.club | Community | Membership Platform |
| btcsa.pro | Professional | Expert Network |
| btcsa.art | Creative | Digital Art & NFTs |
| btcsa.online | Digital | Online Services |
| btcsa.shop | Commerce | E-commerce Platform |
| btcsa.store | Retail | Digital Marketplace |
| btcsa.xyz | Innovation | Tech & Development |

## Contact Information

### General Inquiries
- **Platform**: hello@btcsa.services
- **Information**: info@btcsa.pro

### Business Opportunities
- **Domain Sales**: domains@btcsa.services
- **Partnerships**: partnerships@btcsa.pro

## Deployment

### Static Hosting
The frontend can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Full Stack Deployment
For full functionality with backend:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

### Environment Variables
```bash
PORT=3000                    # Server port
NODE_ENV=production         # Environment
```

## Customization

### Styling
- Modify CSS variables in `index.html` `<style>` section
- Colors, fonts, and animations easily customizable
- Responsive design works on all devices

### Content
- Update domain list in HTML and README
- Modify service categories and descriptions
- Customize contact information

### Functionality
- Add new API endpoints in `server.js`
- Enhance frontend interactions in `script.js`
- Integrate with external services (email, analytics, CRM)

## Security Considerations

### Production Deployment
- Use environment variables for sensitive data
- Implement proper authentication for admin endpoints
- Add rate limiting for API endpoints
- Use HTTPS in production
- Validate and sanitize all inputs

### Email Storage
- Current implementation uses JSON files
- Upgrade to database for production (PostgreSQL, MongoDB)
- Implement backup strategies
- Consider GDPR compliance for EU users

## Future Enhancements

### Planned Features
- Database integration (PostgreSQL/MongoDB)
- Email marketing integration (Mailchimp, SendGrid)
- Analytics dashboard
- Domain appraisal tools
- User authentication system
- Payment processing for domain sales

### Integrations
- Google Analytics
- CRM systems (HubSpot, Salesforce)
- Email marketing platforms
- Payment processors (Stripe, PayPal)
- Domain registrar APIs

## License

MIT License - See LICENSE file for details

## Support

For technical support or business inquiries:
- Email: hello@btcsa.services
- Create an issue in this repository
- Contact for partnership opportunities

---

**BTCSA - Empowering the Bitcoin Economy**
