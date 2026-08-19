const products=[
{name:'Mobile Accessories',tag:'MOBILE',image:'assets/mobile-accessories.svg',description:'Chargers · Mounts · Adapters'},
{name:'Bluetooth Audio',tag:'AUDIO',image:'assets/bluetooth-audio.svg',description:'TWS · Headphones · Speakers'},
{name:'Power Banks',tag:'POWER',image:'assets/power-bank.svg',description:'Portable · Fast Charge'},
{name:'Cables & Charging',tag:'CHARGING',image:'assets/cables.svg',description:'USB-C · Lightning · Data Cables'},
{name:'Smart Wearables',tag:'WEARABLES',image:'assets/wearables.svg',description:'Smart Watch · Fitness Band'},
{name:'LED Products',tag:'LIGHTING',image:'assets/led-products.svg',description:'Bulbs · Strips · Work Lights'},
{name:'Small Electronics & Tools',tag:'TOOLS',image:'assets/tools.svg',description:'Tools · Gadgets · Accessories'}
];
const grid=document.querySelector('#product-grid');
grid.innerHTML=products.map(p=>`<article class="category-card"><div class="category-image"><img src="${p.image}" alt="${p.name} product category illustration"></div><div class="category-body"><span class="category-icon">${p.tag.slice(0,1)}</span><div><h3>${p.name}</h3><p>${p.description}</p></div></div></article>`).join('');
const menu=document.querySelector('.menu-button'),nav=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();