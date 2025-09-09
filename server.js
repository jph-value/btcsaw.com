const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Email storage file
const EMAIL_FILE = 'emails.json';

// Initialize email storage
async function initializeEmailStorage() {
    try {
        await fs.access(EMAIL_FILE);
    } catch {
        await fs.writeFile(EMAIL_FILE, JSON.stringify({ emails: [] }, null, 2));
    }
}

// Read emails from storage
async function readEmails() {
    try {
        const data = await fs.readFile(EMAIL_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading emails:', error);
        return { emails: [] };
    }
}

// Write emails to storage
async function writeEmails(emailData) {
    try {
        await fs.writeFile(EMAIL_FILE, JSON.stringify(emailData, null, 2));
    } catch (error) {
        console.error('Error writing emails:', error);
        throw error;
    }
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Domain showcase pages
const domains = [
    'cc', 'email', 'info', 'life', 'me', 'biz', 'world', 'vip', 
    'services', 'agency', 'club', 'pro', 'art', 'online', 'shop', 'store', 'xyz'
];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Domain showcase routes - serve from individual folders
domains.forEach(domain => {
    app.get(`/${domain}`, (req, res) => {
        res.sendFile(path.join(__dirname, domain, 'index.html'));
    });
    
    // Serve static files from domain folders
    app.use(`/${domain}`, express.static(path.join(__dirname, domain)));
});

// Subscribe to mailing list
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email || !validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }
        
        const emailData = await readEmails();
        
        // Check if email already exists
        if (emailData.emails.some(entry => entry.email === email)) {
            return res.status(409).json({ 
                success: false, 
                message: 'Email already subscribed' 
            });
        }
        
        // Add new email with timestamp
        emailData.emails.push({
            email: email,
            timestamp: new Date().toISOString(),
            ip: req.ip || req.connection.remoteAddress,
            userAgent: req.get('User-Agent')
        });
        
        await writeEmails(emailData);
        
        console.log(`New subscription: ${email}`);
        
        res.json({ 
            success: true, 
            message: 'Successfully subscribed to BTCSA network!' 
        });
        
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error. Please try again later.' 
        });
    }
});

// Get subscriber count (public endpoint)
app.get('/api/subscribers/count', async (req, res) => {
    try {
        const emailData = await readEmails();
        res.json({ 
            count: emailData.emails.length 
        });
    } catch (error) {
        console.error('Error getting subscriber count:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin endpoint to view all emails (protected)
app.get('/api/admin/emails', async (req, res) => {
    try {
        // Simple auth check (in production, use proper authentication)
        const authHeader = req.get('Authorization');
        if (authHeader !== 'Bearer btcsa-admin-2025') {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        const emailData = await readEmails();
        res.json(emailData);
    } catch (error) {
        console.error('Error getting emails:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        service: 'BTCSA Mailing List API'
    });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message, type } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please fill in all required fields' 
            });
        }
        
        if (!validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }
        
        // Store contact inquiry
        const contactData = {
            name,
            email,
            subject: subject || 'General Inquiry',
            message,
            type: type || 'general',
            timestamp: new Date().toISOString(),
            ip: req.ip || req.connection.remoteAddress
        };
        
        // In production, send email notification and store in database
        console.log('New contact inquiry:', contactData);
        
        res.json({ 
            success: true, 
            message: 'Thank you for your inquiry. We will respond within 24 hours.' 
        });
        
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error. Please try again later.' 
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Endpoint not found' 
    });
});

// Start server
async function startServer() {
    try {
        await initializeEmailStorage();
        
        app.listen(PORT, () => {
            console.log(`BTCSA server running on port ${PORT}`);
            console.log(`Visit: http://localhost:${PORT}`);
            console.log(`API Health: http://localhost:${PORT}/api/health`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();
