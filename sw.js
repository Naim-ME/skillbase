/* Bump VERSION whenever you change index.html so phones pick up the new copy. */
const VERSION='skillbase-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
/* cache first, refresh in the background; same-origin files and Google Fonts only */
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url),font=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(u.origin!==location.origin&&!font)return;
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{
      if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}
      return res;
    }).catch(()=>hit||caches.match('./index.html'));
    return hit||net;
  }));
});
