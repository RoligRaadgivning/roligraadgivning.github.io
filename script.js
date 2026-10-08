const menuBtn=document.querySelector('.menu-btn');const mobileMenu=document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);mobileMenu.setAttribute('aria-hidden',!open);menuBtn.textContent=open?'×':'☰';});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');mobileMenu.setAttribute('aria-hidden','true');menuBtn.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
