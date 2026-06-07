(function () {
  // Lightweight click-to-zoom for any <img class="zoomable">.
  // Caption priority: data-caption → alt → (no caption rendered).
  // Click outside the image or press Esc to close.

  function open(src, alt, caption) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    figure.appendChild(img);
    if (caption) {
      var fc = document.createElement('figcaption');
      fc.textContent = caption;
      figure.appendChild(fc);
    }
    overlay.appendChild(figure);
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
    document.querySelectorAll('img.zoomable').forEach(function (img) {
      img.addEventListener('click', function () {
        var caption = img.getAttribute('data-caption') || img.getAttribute('alt');
        open(img.getAttribute('src'), img.getAttribute('alt'), caption);
      });
    });
  });
})();
