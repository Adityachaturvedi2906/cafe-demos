const P=id=>'https://lh3.googleusercontent.com/gps-cs-s/'+id+'=w1000-h800-k-no';
document.querySelectorAll('img[data-src]').forEach(i=>i.src=P(i.dataset.src));
const fx=document.getElementById('fx');
if(fx){const pet=fx.classList.contains('petals');const cols=pet?['var(--a1)','#e8a0b0','#f6d2da']:['#e0457b','#ffd166','#06d6a0','#118ab2','#ffffff'];for(let k=0;k<(pet?26:60);k++){const s=document.createElement('i');s.style.left=Math.random()*100+'%';s.style.background=cols[k%cols.length];s.style.animationDuration=(pet?7:3)+Math.random()*(pet?6:4)+'s';s.style.animationDelay=-Math.random()*8+'s';if(!pet)s.style.transform='rotate('+Math.random()*180+'deg)';fx.appendChild(s)}}
const io=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*90);io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const qs=document.querySelectorAll('.q'),ds=document.querySelectorAll('.dots span');let q=0;
if(qs.length>1)setInterval(()=>{qs[q].classList.remove('on');ds[q].classList.remove('on');q=(q+1)%qs.length;qs[q].classList.add('on');ds[q].classList.add('on')},4500);
const lb=document.getElementById('lb');document.querySelectorAll('.gal figure').forEach(f=>f.onclick=()=>{lb.querySelector('img').src=f.querySelector('img').src.replace('w1000-h800','w1800-h1400');lb.classList.add('on')});lb.onclick=()=>lb.classList.remove('on');
document.querySelectorAll('[data-count]').forEach(el=>new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();let n=0;const t=+el.dataset.count;const iv=setInterval(()=>{n++;el.textContent=n;if(n>=t)clearInterval(iv)},60)}}).observe(el));
