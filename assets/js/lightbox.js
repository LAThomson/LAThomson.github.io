(function () {
  // Lightweight click-to-zoom for any <img class="project-image">.
  // No dependencies; click outside the image or press Esc to close.

  function open(src, alt) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    // Force a reflow so the opacity transition fires.
    void overlay.offsetWidth;
    overlay.classList.add('is-open');

    function close() {
      overlay.classList.remove('is-open');
      overlay.addEventListener('transitionend', function handler() {
        overlay.removeEventListener('transitionend', handler);
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      });
      document.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img.project-image').forEach(function (img) {
      img.addEventListener('click', function () {
        open(img.getAttribute('src'), img.getAttribute('alt'));
      });
    });
  });
})();
