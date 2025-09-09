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
- **Backend**: Netlify Functions (Serverless)
- **Deployment**: Netlify (CDN, SSL, Domain Management)
- **Domain Routing**: Host-based redirects in netlify.toml
- **Styling**: Modern CSS with gradients, animations, and responsive design

## Quick Start

### Prerequisites
- Netlify account and CLI installed
- Git repository

### Deployment

1. **Connect Repository to Netlify**
   - Link your GitHub repository to Netlify
   - Configure build settings (no build command needed for static site)

2. **Configure Domain Aliases**
   - Add all 17 BTCSA domains as aliases in Netlify dashboard
   - Point DNS CNAME records to your Netlify site

3. **Deploy**
   - Netlify automatically deploys on git push
   - SSL certificates provisioned automatically
   - Domain routing handled by netlify.toml configuration

4. **Visit Your Sites**
   - Main site: `https://btcsaw.com`
   - Domain pages: `https://btcsa.cc`, `https://btcsa.email`, etc.

## API Endpoints

### Netlify Functions

#### Mailing List Function (`/api/mailing-list`)
- `POST /api/mailing-list` - Subscribe to mailing list
  - Body: `{ "email": "user@example.com" }`
  - Returns: Success/error message

- `GET /api/mailing-list` - Get function info

#### Contact Function (`/api/contact`)
- `POST /api/contact` - Contact form submission
  - Body: `{ "name": "John", "email": "john@example.com", "message": "Hello" }`
  - Returns: Success/error message

### Function Locations
- Functions are located in: `netlify/functions/`
- Automatically deployed by Netlify on git push
- CORS enabled for all origins

## Email Management

### Current Implementation
- Email subscriptions are handled by the `/api/mailing-list` Netlify Function
- Emails are processed server-side (no local storage)
- Contact forms are handled by the `/api/contact` Netlify Function

### Function Features
- Server-side email validation
- CORS enabled for cross-origin requests
- Error handling and logging
- Scalable serverless architecture

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
