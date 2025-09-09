# BTCSA Domain Management Strategy

## Current Issue
- **Problem:** btcsa.cc shows "Not secure" and displays main portfolio instead of CC page
- **Root Cause:** Domain aliases not configured in Netlify dashboard
- **Portfolio Tiles:** Fixed to redirect instead of copying text

## Required Actions

### Step 1: Add Domain Aliases in Netlify Dashboard
**CRITICAL:** Add both apex and www for each domain in Netlify:
Site Settings → Domain management → Add domain

```
Apex + www for each:
- btcsa.cc, www.btcsa.cc
- btcsa.email, www.btcsa.email
- btcsa.info, www.btcsa.info
- btcsa.life, www.btcsa.life
- btcsa.me, www.btcsa.me
- btcsa.biz, www.btcsa.biz
- btcsa.world, www.btcsa.world
- btcsa.vip, www.btcsa.vip
- btcsa.services, www.btcsa.services
- btcsa.agency, www.btcsa.agency
- btcsa.shop, www.btcsa.shop
- btcsa.store, www.btcsa.store
- btcsa.online, www.btcsa.online
- btcsa.pro, www.btcsa.pro
- btcsa.club, www.btcsa.club
- btcsa.art, www.btcsa.art
- btcsa.xyz, www.btcsa.xyz
```

### Step 2: DNS Configuration
You can use either Netlify DNS (recommended) or keep external DNS.

- Netlify DNS (recommended)
  1. In Site Settings → Domain management → Set up Netlify DNS for each domain
  2. At your registrar, set the domain’s NS records to the **four Netlify name servers shown in the dashboard** (use all four)
  3. Netlify will automatically configure apex and www once verified

- External DNS (if you don’t switch to Netlify DNS)
  - For each domain:
    - `www` subdomain: CNAME → `<your-site>.netlify.app`
    - Apex (root) domain: use your DNS provider’s ALIAS/ANAME/flattened CNAME to `<your-site>.netlify.app`
    - If ALIAS/ANAME isn’t supported, prefer migrating to Netlify DNS to avoid brittle A records

### Step 3: Host-Based Rewrites (no redirects)
The `netlify.toml` maps each alias domain’s root to its folder index (status 200, no redirect). Example:

```toml
[[redirects]]
  from = "/"
  to = "/cc/index.html"
  status = 200
  force = true
  conditions = { Host = ["btcsa.cc", "www.btcsa.cc"] }
```

Repeat for every domain (email→/email/index.html, vip→/vip/index.html, etc.).

btcsaw.com keeps subfolder rules and is host-scoped to `btcsaw.com` only.

### Step 4: Netlify Dashboard Hygiene
- Custom domains list: ensure each alias is attached to this site (not configured as a redirect)
- Redirects/Rewrites (UI): remove any global fallback like `/* → /index.html`
- Primary domain: do not set one that forces 301 canonicalization across aliases

## Current Status
1. ✅ Fixed portfolio tile click behavior (now redirects instead of copying)
2. ✅ Enhanced text contrast across all domain pages
3. ✅ VIP initiatives restructured and content refined
4. ✅ Repo includes host-based root-only rewrites per alias
5. ⚠️ **MANUAL ACTION REQUIRED:** Attach apex+www for all domains in Netlify
6. ⚠️ **MANUAL ACTION REQUIRED:** Configure DNS (Netlify DNS with all four NS, or external CNAME/ALIAS)

## Post-Deploy Verification
- Response headers/content lengths should match the intended files:
  - `https://btcsa.cc` → 200; matches `cc/index.html`
  - `https://btcsa.vip` → 200; matches `vip/index.html`
  - `https://btcsaw.com` → 200; matches root `index.html`
- Sample checks:
```bash
curl -I https://btcsa.cc
curl -I https://btcsa.vip
curl -I https://btcsaw.com
```

## Benefits of Recommended Approach
- Single codebase and deployment
- Automatic SSL per domain
- Clean host-based routing without redirects
- Works reliably with both Netlify DNS and external DNS (with ALIAS/CNAME)
