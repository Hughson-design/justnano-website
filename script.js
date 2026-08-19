const products=[
{name:'Mobile Accessories',tag:'MOBILE',image:'assets/mobile-accessories.svg',description:'Charging accessories, phone stands, car accessories and practical mobile essentials for wholesale programs.'},
{name:'Bluetooth Audio',tag:'AUDIO',image:'assets/bluetooth-audio.svg',description:'TWS earbuds, wireless audio accessories and portable Bluetooth products for everyday consumer use.'},
{name:'Power Banks',tag:'POWER',image:'assets/power-bank.svg',description:'Portable charging solutions including compact, fast-charge and magnetic-style power products.'},
{name:'Cables & Charging',tag:'CHARGING',image:'assets/cables.svg',description:'USB-C and multi-device charging cables, adapters and related connectivity accessories.'},
{name:'Smart Wearables',tag:'WEARABLES',image:'assets/wearables.svg',description:'Smart watches, activity-oriented wearables and selected accessories for connected lifestyles.'},
{name:'LED Products',tag:'LIGHTING',image:'assets/led-products.svg',description:'Portable lighting, work lights, decorative lighting and selected LED products for home and commercial use.'},
{name:'Small Electronics & Tools',tag:'TOOLS',image:'assets/tools.svg',description:'Useful small electronics, household tools and practical hardware-oriented consumer products.'},
{name:'Kids & Family Products',tag:'SELECTED',image:'assets/kids-family.svg',description:'A selected secondary range of family and children’s products within our broader merchandise portfolio.',secondary:true}
];
const grid=document.querySelector('#product-grid');
grid.innerHTML=products.map(p=>`<article class="category-card${p.secondary?' secondary-category':''}"><div class="category-image"><img src="${p.image}" alt="${p.name} product category illustration"><span>${p.tag}</span></div><div class="category-body"><h3>${p.name}</h3><p>${p.description}</p><a href="mailto:info@justnanoinc.com?subject=${encodeURIComponent('Wholesale Inquiry - '+p.name)}">Request product information →</a></div></article>`).join('');
const menu=document.querySelector('.menu-button'),nav=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();