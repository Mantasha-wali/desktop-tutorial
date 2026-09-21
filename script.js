function go(id){document.querySelectorAll('.page')
.forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function birthday(){go('birthday');confetti()}
function cutCake(){document.getElementById('cakeText')
.textContent='Yayyy! Cake cut! 🎂💗 Make your wish!';document.getElementById('cakeNext').classList.remove('hidden');confetti()}
function confetti(){let icons=['💗','✨','🎉','🌸','🎀','⭐','💖'];for(let i=0;i<35;i++){let x=document.createElement('span');x.textContent=icons[Math.floor(Math.random()*icons.length)];x.style.position='fixed';x.style.left=Math.random()*100+'vw';x.style.top='-30px';x.style.zIndex=99;x.style.fontSize='22px';x.style.animation='fall 3.5s linear forwards';document.body.appendChild(x);setTimeout(()=>x.remove(),4000)}}
function gift(n){let box=document.getElementById('giftBox');if(n===1) box.innerHTML = `<div style="font-size:45px">💌</div><h3>A Tiny Note For You</h3><p>You are the most beautiful part of my life. 🫂💗</p>`;if(n===3)box.innerHTML='<div style="font-size:75px">🌷🌸🌷</div><h3>Flowers For You</h3><p>*کوئی تم سا نہیں*🩷🫂. 🌸</p>';box.classList.remove('hidden');box.scrollIntoView({behavior:'smooth',block:'center'})}
