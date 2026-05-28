(function(){
  function qs(sel){return document.querySelector(sel)}
  function qsa(sel){return document.querySelectorAll(sel)}
  const toggle = qs('.menu-toggle');
  const sidebar = qs('.sidebar');
  const nav = qs('.nav-menu');
  if(!toggle || !sidebar) return;

  function closeNav(){ sidebar.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
  function openNav(){ sidebar.classList.add('open'); toggle.setAttribute('aria-expanded','true'); }

  toggle.addEventListener('click', function(e){
    e.stopPropagation();
    sidebar.classList.toggle('open');
    const expanded = sidebar.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  // close when clicking outside
  document.addEventListener('click', function(e){
    if(!sidebar.classList.contains('open')) return;
    if(!sidebar.contains(e.target)) closeNav();
  });

  // close on escape
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeNav(); });

})();
