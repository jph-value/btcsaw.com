#!/bin/bash

# Script to update all BTCSA pages to use global banner system

# Array of all domain directories
domains=("agency" "art" "biz" "club" "email" "info" "life" "me" "online" "pro" "services" "shop" "store" "vip" "world" "xyz")

for domain in "${domains[@]}"; do
    file="$domain/index.html"
    if [ -f "$file" ]; then
        echo "Updating $file..."
        
        # Remove existing disclaimer banner
        sed -i '/<div style="background: linear-gradient(135deg, #ff6b35, #f7931a); color: white; text-align: center; padding: 8px 0;/,/>/d' "$file"
        sed -i '/⚠️ PRESENTATION ONLY: No functional products or services are currently available/d' "$file"
        
        # Remove existing purchase banners
        sed -i '/<div style="background: linear-gradient(135deg, #ff6b35, #f7931a); color: white; text-align: center; padding: 20px;/,/>/d' "$file"
        sed -i '/🏷️ This Full Domain Brand Bundle is Available for Purchase/d' "$file"
        sed -i '/Complete.*brand including domain, design, and concept/d' "$file"
        
        # Add global-banners.js script before closing body tag
        sed -i 's|</body>|    <script src="../global-banners.js"></script>\n</body>|' "$file"
        
        # Add banner injection comment after opening body tag
        sed -i 's|<body>|<body>\n    <!-- Banners will be injected by global-banners.js -->|' "$file"
        
        echo "Updated $file"
    else
        echo "File $file not found"
    fi
done

echo "All domain pages updated to use global banner system!"
