const c=document.getElementById('stars'),x=c.getContext('2d');let s=[];
function rs(){c.width=innerWidth;c.height=innerHeight;s=Array.from({length:Math.min(220,innerWidth/5)},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.6+.2,v:Math.random()*.3+.05,h:Math.random()<.5?'#2ef2ff':'#d9b8ff'}))}
rs();addEventListener('resize',rs);
(function d(){x.clearRect(0,0,c.width,c.height);for(const p of s){p.y+=p.v;if(p.y>c.height)p.y=0;x.globalAlpha=.4+Math.random()*.6;x.fillStyle=p.h;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()}requestAnimationFrame(d)})();
const t=document.getElementById('toast');
document.getElementById('copy').onclick=async()=>{const v=document.getElementById('ca').textContent.trim();try{await navigator.clipboard.writeText(v)}catch(e){}t.textContent=v==='TBA'?'Copied! (CA drops at launch)':'Copied!';t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)};
const io=new IntersectionObserver(e=>e.forEach(i=>{if(i.isIntersecting){i.target.classList.add('in');io.unobserve(i.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.tile img').forEach(i=>i.onclick=()=>{li.src=i.currentSrc||i.src;lb.classList.add('on')});lb.onclick=()=>lb.classList.remove('on');
const m=document.querySelector('.marquee div');m.textContent+=m.textContent;
