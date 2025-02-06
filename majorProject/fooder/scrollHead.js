const scrollHeader = () => {
  const header = document.getElementById("head");
  if (this.scrollY >= 10) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
};

window.addEventListener('scroll', scrollHeader);
