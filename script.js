// BTCSA Website JavaScript Functionality

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle mailing list form submission
async function handleMailingListSubmission(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const submitButton = event.target.querySelector('button[type="submit"]');
    const email = emailInput.value.trim();
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    if (!email || !validateEmail(email)) {
        errorMessage.textContent = '❌ Please enter a valid email address to join our network.';
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }
    
    // Show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Joining...';
    submitButton.disabled = true;
    
    try {
        // Send to backend API
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        const result = await response.json();
        
        if (result.success) {
            // Show success message
            successMessage.style.display = 'block';
            emailInput.value = '';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Track the signup
            trackEmailSignup(email);
        } else {
            // Show error message
            errorMessage.textContent = `❌ ${result.message}`;
            errorMessage.style.display = 'block';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
    } catch (error) {
        console.error('Subscription error:', error);
        
        // Fallback to localStorage if API fails
        storeEmail(email);
        successMessage.style.display = 'block';
        emailInput.value = '';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        console.log('API unavailable, stored locally');
    } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
}

// Store email locally (demo functionality)
function storeEmail(email) {
    let emails = JSON.parse(localStorage.getItem('btcsa_emails') || '[]');
    
    // Check if email already exists
    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('btcsa_emails', JSON.stringify(emails));
        console.log('Email stored:', email);
        console.log('Total emails:', emails.length);
    }
}

// Analytics tracking placeholder
function trackEmailSignup(email) {
    // Placeholder for analytics tracking
    // In production, integrate with Google Analytics, Mixpanel, etc.
    console.log('Email signup tracked:', email);
    
    // Example: gtag('event', 'signup', { 'email': email });
}

// Enhanced feature card interactions
function initializeFeatureCards() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Domain card interactions
function initializeDomainCards() {
    document.querySelectorAll('.domain-card').forEach(card => {
        // Remove the click event listener that copies text
        // The cards should use their href attribute for navigation
        
        // Add hover effect
        card.style.cursor = 'pointer';
        card.title = 'Click to visit domain showcase';
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize contact form functionality
function initializeContactForms() {
    // Add click-to-copy functionality for email addresses
    document.querySelectorAll('strong').forEach(element => {
        if (element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy email';
            
            element.addEventListener('click', function() {
                const email = this.textContent;
                
                // Create temporary element for copying
                const tempElement = document.createElement('textarea');
                tempElement.value = email;
                document.body.appendChild(tempElement);
                tempElement.select();
                
                try {
                    document.execCommand('copy');
                    
                    // Visual feedback
                    const originalText = this.textContent;
                    this.textContent = '✓ Copied!';
                    this.style.color = '#28a745';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 1500);
                    
                } catch (err) {
                    console.log('Copy failed:', err);
                }
                
                document.body.removeChild(tempElement);
            });
        }
    });
}

// Add floating animation variations
function enhanceFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-bitcoin');
    
    floatingElements.forEach((element, index) => {
        // Add random rotation and scale variations
        const randomDelay = Math.random() * 2;
        const randomDuration = 4 + Math.random() * 4;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
        
        // Add click interaction for fun
        element.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 100);
        });
    });
}

// Admin function to view stored emails (for demo)
function viewStoredEmails() {
    const emails = JSON.parse(localStorage.getItem('btcsa_emails') || '[]');
    console.log('Stored emails:', emails);
    return emails;
}

// Admin function to export emails (for demo)
function exportEmails() {
    const emails = JSON.parse(localStorage.getItem('btcsa_emails') || '[]');
    const emailList = emails.join('\n');
    
    const blob = new Blob([emailList], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'btcsa_emails.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up mailing list form
    const mailingListForm = document.getElementById('mailingListForm');
    if (mailingListForm) {
        mailingListForm.addEventListener('submit', handleMailingListSubmission);
    }
    
    // Initialize all interactive elements
    initializeFeatureCards();
    initializeDomainCards();
    initializeSmoothScrolling();
    initializeContactForms();
    enhanceFloatingElements();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press 'E' to focus email input
        if (e.key === 'e' || e.key === 'E') {
            if (!e.target.matches('input, textarea')) {
                e.preventDefault();
                document.getElementById('emailInput').focus();
            }
        }
    });
    
    console.log('BTCSA website initialized successfully');
});

// Expose admin functions globally for console access
window.btcsaAdmin = {
    viewEmails: viewStoredEmails,
    exportEmails: exportEmails,
    clearEmails: () => {
        localStorage.removeItem('btcsa_emails');
        console.log('Email list cleared');
    }
};
