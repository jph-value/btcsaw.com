# BTCSA Domain Management Strategy

## Current Setup
- **Main Domain:** btcsaw.com (Netlify project with SSL)
- **17 BTCSA Domains:** btcsa.cc, btcsa.email, btcsa.info, etc.

## Recommended Approach: Single Project + Domain Aliases

### Step 1: Add Domain Aliases in Netlify
In your Netlify dashboard → Domain settings → Add domain alias:

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

### Step 2: DNS Configuration
For each BTCSA domain, set DNS records:
```
Type: CNAME
Name: @
Value: btcsaw.netlify.app
```

### Step 3: Domain Routing (Already Configured)
The `netlify.toml` file routes each domain to its folder:
- `btcsa.cc` → `/cc/index.html`
- `btcsa.email` → `/email/index.html`
- etc.

## Alternative Approaches

### Option 2: Separate Netlify Projects
- **Pros:** Complete isolation, custom SSL per domain
- **Cons:** 17 separate deployments, complex management, higher cost

### Option 3: DNS-Level Routing
- **Pros:** No Netlify redirects needed
- **Cons:** Requires advanced DNS provider, more complex setup

## Implementation Priority
1. ✅ Fix current redirect issue (remove btcsa-platform.netlify.app)
2. 🔄 Add domain aliases in Netlify dashboard
3. 🔄 Configure DNS for each BTCSA domain
4. 🔄 Test all domain routing

## Benefits of Recommended Approach
- Single codebase and deployment
- Automatic SSL for all domains
- Easy content updates across all sites
- Cost-effective (one Netlify project)
- Centralized analytics and monitoring
