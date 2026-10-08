(function(){
  const menuButton=document.querySelector('.menu-btn');
  const mobileMenu=document.querySelector('.mobile-menu');
  if(menuButton&&mobileMenu){
    menuButton.addEventListener('click',()=>{
      const open=mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(open));
      mobileMenu.setAttribute('aria-hidden',String(!open));
      menuButton.textContent=open?'×':'☰';
    });
    mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
      mobileMenu.setAttribute('aria-hidden','true');
      menuButton.textContent='☰';
    }));
  }
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
})();
