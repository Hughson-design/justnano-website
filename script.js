const products = [
  {name:'Wooden Tool Set with Drill',category:'builder',tag:'BUILDER PLAY',emoji:'🧰',description:'A hands-on wooden tool set designed for imaginative building, fine-motor practice and pretend repairs.',url:'https://www.amazon.com/dp/B0F1XZ7BHY'},
  {name:'Pink Wooden Tool Set',category:'builder',tag:'GIFT FAVORITE',emoji:'🔨',description:'A colorful 44-piece builder set with drill, apron and storage box for creative role play.',url:'https://www.amazon.com/dp/B0G6418FGW'},
  {name:'Kids Tool Set with Apron',category:'builder',tag:'STEM PLAY',emoji:'🪚',description:'A classic wooden toddler tool collection that encourages coordination, creativity and problem-solving.',url:'https://www.amazon.com/dp/B08LCC9WS9'},
  {name:'Montessori Skill Board',category:'learning',tag:'SCREEN-FREE',emoji:'🧩',description:'Progressive matching, counting and stacking activities that grow with a child’s developing skills.',url:'https://www.amazon.com/dp/B0FD9SPMN5'},
  {name:'Interactive Robot Puppy',category:'pretend',tag:'PRETEND PLAY',emoji:'🐕',description:'A walking and barking puppy toy that introduces playful pet-care routines and imaginative companionship.',url:'https://www.amazon.com/dp/B0F8B4V1P1'},
  {name:'Ice Cream Bath Foam Maker',category:'bath',tag:'BATH TIME',emoji:'🍦',description:'A playful bath-time set that turns foam and water play into a cheerful ice-cream-shop adventure.',url:'https://www.amazon.com/dp/B0F8MP511C'}
];
const grid=document.querySelector('#product-grid');
function render(filter='all'){
  grid.innerHTML=products.filter(p=>filter==='all'||p.category===filter).map(p=>`<article class="product-card"><div class="product-visual ${p.category}"><span class="tag">${p.tag}</span><span class="emoji" aria-hidden="true">${p.emoji}</span></div><div class="product-body"><h3>${p.name}</h3><p>${p.description}</p><a class="product-link" href="${p.url}" target="_blank" rel="noopener noreferrer">View on Amazon →</a></div></article>`).join('');
}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));
const menu=document.querySelector('.menu-button'),nav=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
