(function(){
  const THEME_KEY = 'y11-theme';
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem(THEME_KEY);
  const initial = saved || (prefersLight ? 'light' : 'dark');
  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    // Toggle Prism theme links if present
    const lightLink = document.getElementById('prism-theme-light');
    const darkLink = document.getElementById('prism-theme-dark');
    if (lightLink && darkLink){
      if (theme === 'light'){
        lightLink.disabled = false; darkLink.disabled = true;
      } else {
        lightLink.disabled = true; darkLink.disabled = false;
      }
    }
  }
  applyTheme(initial);
  document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('theme-toggle');
    if (btn){
      btn.addEventListener('click', function(){
        const current = document.documentElement.getAttribute('data-theme') || initial;
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
      });
    }
    
    // Handle back-to-top links
    const backTopLinks = document.querySelectorAll('.back-top');
    backTopLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  });
})();