// Global Banner System for BTCSA Platform
// This file contains all banner content to ensure consistency across all pages

const BTCSA_BANNERS = {
    // Disclaimer banner (appears at top of all pages)
    disclaimer: {
        style: "background: linear-gradient(135deg, #ff6b35, #f7931a); color: white; text-align: center; padding: 8px 0; font-size: 14px; font-weight: 500; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1);",
        content: "⚠️ PRESENTATION ONLY: No functional products or services are currently available. This is a conceptual showcase."
    },
    
    // Purchase banner (appears on individual domain pages)
    purchase: {
        style: "background: linear-gradient(135deg, #ff6b35, #f7931a); color: white; text-align: center; padding: 20px; margin: 40px 0; border-radius: 15px; border: 2px solid rgba(255, 255, 255, 0.2);",
        title: "🏷️ This Full Domain Brand Bundle is Available for Purchase",
        getContent: function(domain) {
            return `Complete ${domain} brand including domain, design, and concept. Contact: btcsaw@p-h.email`;
        }
    },
    
    // Portfolio purchase banner (appears on main page)
    portfolioPurchase: {
        style: "background: linear-gradient(135deg, #ff6b35, #f7931a); color: white; text-align: center; padding: 20px; margin: 40px 0; border-radius: 15px; border: 2px solid rgba(255, 255, 255, 0.2);",
        title: "🏷️ Complete BTCSA Domain Portfolio Available for Purchase",
        content: "17 premium Bitcoin domains with full branding, designs, and concepts. Contact: btcsaw@p-h.email"
    }
};

// Function to create disclaimer banner
function createDisclaimerBanner() {
    return `<div style="${BTCSA_BANNERS.disclaimer.style}">${BTCSA_BANNERS.disclaimer.content}</div>`;
}

// Function to create purchase banner for individual domains
function createPurchaseBanner(domain) {
    const banner = BTCSA_BANNERS.purchase;
    return `
        <div style="${banner.style}">
            <h3 style="margin-bottom: 10px; font-size: 1.5rem;">${banner.title}</h3>
            <p>${banner.getContent(domain)}</p>
        </div>
    `;
}

// Function to create portfolio purchase banner
function createPortfolioPurchaseBanner() {
    const banner = BTCSA_BANNERS.portfolioPurchase;
    return `
        <div style="${banner.style}">
            <h3 style="margin-bottom: 10px; font-size: 1.5rem;">${banner.title}</h3>
            <p>${banner.content}</p>
        </div>
    `;
}

// Auto-inject banners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Inject disclaimer banner at top of body
    const disclaimerBanner = document.createElement('div');
    disclaimerBanner.innerHTML = createDisclaimerBanner();
    document.body.insertBefore(disclaimerBanner.firstElementChild, document.body.firstChild);
    
    // Inject purchase banner if this is a domain page (not main portfolio)
    const currentDomain = window.location.hostname;
    const isMainSite = currentDomain === 'btcsaw.com' || currentDomain === 'localhost' || currentDomain.includes('netlify');
    
    if (!isMainSite) {
        // This is a BTCSA domain page
        const container = document.querySelector('.container') || document.querySelector('main') || document.body;
        const purchaseBanner = document.createElement('div');
        purchaseBanner.innerHTML = createPurchaseBanner(currentDomain);
        container.insertBefore(purchaseBanner.firstElementChild, container.firstChild);
    } else {
        // This is the main portfolio page
        const footer = document.querySelector('footer');
        if (footer) {
            const portfolioBanner = document.createElement('div');
            portfolioBanner.innerHTML = createPortfolioPurchaseBanner();
            footer.appendChild(portfolioBanner.firstElementChild);
        }
    }
});
