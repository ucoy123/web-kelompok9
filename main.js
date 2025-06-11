console.log("Website Sekolah Dasar Negeri Rambay Kulon siap digunakan.");
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Hindari link internal anchor (#) dan link yang buka tab baru
    if (href && !href.startsWith('#') && !link.hasAttribute('target')) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('page-exit');
        setTimeout(() => {
          window.location.href = href;
        }, 500); // cocokkan dengan durasi transisi CSS
      });
    }
  });
});
