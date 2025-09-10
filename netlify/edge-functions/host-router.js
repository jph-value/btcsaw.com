export default async (request, context) => {
  const url = new URL(request.url);
  const host = (url.hostname || '').toLowerCase();
  const path = url.pathname || '/';

  // Only rewrite the root path to avoid changing visible URLs
  if (path !== '/' && path !== '/index.html') {
    return context.next();
  }

  const hostToFolder = {
    'btcsa.cc': '/cc/index.html', 'www.btcsa.cc': '/cc/index.html',
    'btcsa.email': '/email/index.html', 'www.btcsa.email': '/email/index.html',
    'btcsa.info': '/info/index.html', 'www.btcsa.info': '/info/index.html',
    'btcsa.life': '/life/index.html', 'www.btcsa.life': '/life/index.html',
    'btcsa.me': '/me/index.html', 'www.btcsa.me': '/me/index.html',
    'btcsa.biz': '/biz/index.html', 'www.btcsa.biz': '/biz/index.html',
    'btcsa.world': '/world/index.html', 'www.btcsa.world': '/world/index.html',
    'btcsa.vip': '/vip/index.html', 'www.btcsa.vip': '/vip/index.html',
    'btcsa.services': '/services/index.html', 'www.btcsa.services': '/services/index.html',
    'btcsa.agency': '/agency/index.html', 'www.btcsa.agency': '/agency/index.html',
    'btcsa.shop': '/shop/index.html', 'www.btcsa.shop': '/shop/index.html',
    'btcsa.store': '/store/index.html', 'www.btcsa.store': '/store/index.html',
    'btcsa.online': '/online/index.html', 'www.btcsa.online': '/online/index.html',
    'btcsa.pro': '/pro/index.html', 'www.btcsa.pro': '/pro/index.html',
    'btcsa.club': '/club/index.html', 'www.btcsa.club': '/club/index.html',
    'btcsa.art': '/art/index.html', 'www.btcsa.art': '/art/index.html',
    'btcsa.xyz': '/xyz/index.html', 'www.btcsa.xyz': '/xyz/index.html'
  };

  const target = hostToFolder[host];
  if (target) {
    // Internal rewrite: serves the target content while keeping the original URL
    return context.rewrite(new URL(target, url));
  }

  return context.next();
};


