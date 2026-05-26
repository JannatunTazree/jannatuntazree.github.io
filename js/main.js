
// Cursor
const cur = document.getElementById('cur'), cur2 = document.getElementById('cur2');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function anim(){
  cur.style.left=mx+'px'; cur.style.top=my+'px';
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  cur2.style.left=rx+'px'; cur2.style.top=ry+'px';
  requestAnimationFrame(anim);
})();

// Lightbox
const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg');
document.querySelectorAll('.gitem img').forEach(img=>{
  img.addEventListener('click',()=>{ lbImg.src=img.src; lb.classList.add('open'); });
});
document.getElementById('lbX').addEventListener('click',()=>lb.classList.remove('open'));
lb.addEventListener('click',e=>{ if(e.target===lb) lb.classList.remove('open'); });

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('v');obs.unobserve(e.target);} });
},{threshold:.07});
document.querySelectorAll('.r').forEach(el=>obs.observe(el));
