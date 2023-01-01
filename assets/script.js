const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
