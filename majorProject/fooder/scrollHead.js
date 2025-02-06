const scrollHeader = () => {
  const header = document.getElementById("head");
  if (this.scrollY >= 5) {
    header.classList.add('scroll-header');
    header.classList.remove('no-scroll');
  } else {
    header.classList.remove('scroll-header');
    header.classList.add('no-scroll');
  }
};

window.addEventListener('scroll', scrollHeader);
