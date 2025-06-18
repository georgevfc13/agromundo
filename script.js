window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    revealOnScroll(); 
});
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-up');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);


document.getElementById('btn-play').addEventListener('click', function() {
    document.getElementById('miniatura-video').style.opacity = 0;
    this.style.opacity = 0;
    setTimeout(() => {
      document.getElementById('miniatura-video').style.display = 'none';
      document.getElementById('btn-play').style.display = 'none';
      const video = document.getElementById('video-container');
      const iframe = video.querySelector('iframe');
      let src = iframe.getAttribute('src');
      if (!src.includes('autoplay=1')) {
        src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
        iframe.setAttribute('src', src);
      }
      video.style.pointerEvents = 'auto';
      video.style.opacity = 1;
    }, 400);
});