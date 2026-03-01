const LAYERS = [
  { id: 'l-stars',  speed: 0.02 },
  { id: 'l-sky',    speed: 0.08 },
  { id: 'l-mfar',   speed: 0.18 },
  { id: 'l-mnear',  speed: 0.38 },
  { id: 'l-ground', speed: 0.60 },
];

const layers  = LAYERS.map(({ id, speed }) => ({ el: document.getElementById(id), speed }));
const valY    = document.getElementById('v-y');
const valP    = document.getElementById('v-p');
const formula = document.getElementById('formula');
let ticking   = false;
let maxScroll = 1;

function update() {
  const y = window.scrollY;
  const p = Math.min(y / maxScroll * 100, 100);
  layers.forEach(({ el, speed }) => el.style.transform = `translateY(${-(y * speed).toFixed(2)}px)`);
  valY.textContent    = Math.round(y);
  valP.textContent    = p.toFixed(1);
  formula.textContent = `−${(y * 0.60).toFixed(0)}`;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(update); ticking = true; }
}, { passive: true });

function generateStars() {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 200; i++) {
    const s    = document.createElement('div');
    const size = (Math.random() * 2.2 + 0.4).toFixed(1);
    s.style.cssText = `position:absolute;top:${(Math.random()*82).toFixed(2)}%;left:${(Math.random()*100).toFixed(2)}%;width:${size}px;height:${size}px;background:#fff;border-radius:50%;opacity:${(Math.random()*.5+.5).toFixed(2)};`;
    if (Math.random() > 0.45)
      s.style.animation = `twinkle ${(Math.random()*3.5+1.5).toFixed(1)}s ${(Math.random()*6).toFixed(1)}s ease-in-out infinite`;
    frag.appendChild(s);
  }
  document.getElementById('l-stars').appendChild(frag);
}

maxScroll = document.documentElement.scrollHeight - window.innerHeight;
generateStars();
update();
