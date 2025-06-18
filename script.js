document.getElementById('btn-play').addEventListener('click', function() {
    // Oculta la miniatura y el botón
    document.getElementById('miniatura-video').style.opacity = 0;
    this.style.opacity = 0;
    setTimeout(() => {
      document.getElementById('miniatura-video').style.display = 'none';
      document.getElementById('btn-play').style.display = 'none';
      // Muestra el video
      const video = document.getElementById('video-container');
      video.style.pointerEvents = 'auto';
      video.style.opacity = 1;
    }, 400);
  });