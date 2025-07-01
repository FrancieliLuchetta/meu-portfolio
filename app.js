// Scroll suave para navegação interna
document.querySelectorAll('#menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// (Aqui você pode adicionar mais funções JS no futuro, como dark mode, animação etc.)
