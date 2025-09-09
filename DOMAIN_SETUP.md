# BTCSA Domain Management Strategy

## Current Issue
- **Problem:** btcsa.cc shows "Not secure" and displays main portfolio instead of CC page
- **Root Cause:** Domain aliases not configured in Netlify dashboard
- **Portfolio Tiles:** Fixed to redirect instead of copying text

## Required Actions

### Step 1: Add Domain Aliases in Netlify Dashboard
**CRITICAL:** You must manually add these domains in Netlify:
Site Settings → Domain management → Add domain alias:

```
btcsa.cc
btcsa.email  
btcsa.info
btcsa.life
btcsa.me
btcsa.biz
btcsa.world
btcsa.vip
btcsa.services
btcsa.agency
btcsa.shop
btcsa.store
btcsa.online
btcsa.pro
btcsa.club
btcsa.art
btcsa.xyz
```

### Step 2: DNS Configuration (After Step 1)
For each BTCSA domain, point DNS to your Netlify site:
```
Type: CNAME
Name: @ (or www)
Value: [your-netlify-site].netlify.app
```

### Step 3: Verify Domain Routing
The `netlify.toml` already configures routing:
- `btcsa.cc/*` → `/cc/:splat` (status 200)
- `btcsa.email/*` → `/email/:splat` (status 200)
- etc.

## Current Status
1. ✅ Fixed portfolio tile click behavior (now redirects instead of copying)
2. ✅ Enhanced text contrast across all domain pages
3. ✅ Restructured BTCSA.vip initiatives into Local and Systemic R&D
4. ✅ Pushed all changes to main branch
5. ⚠️ **MANUAL ACTION REQUIRED:** Add domain aliases in Netlify dashboard
6. ⚠️ **MANUAL ACTION REQUIRED:** Configure DNS for each BTCSA domain

## Next Steps After Domain Configuration
- Test each domain (btcsa.cc, btcsa.email, etc.)
- Verify SSL certificates are issued automatically
- Confirm proper routing to subdirectories

## Benefits of Recommended Approach
- Single codebase and deployment
- Automatic SSL for all domains
- Easy content updates across all sites
- Cost-effective (one Netlify project)
- Centralized analytics and monitoring
