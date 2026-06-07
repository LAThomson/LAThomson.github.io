(function () {
  const themes = ['warm', 'forest', 'espresso'];
  var transitionTimeout = null;

  function currentTheme() {
    return themes.find(function (t) {
      return document.documentElement.classList.contains('theme-' + t);
    }) || 'warm';
  }

  function setTheme(t) {
    // Add the transitioning class *before* the theme class change so the
    // slowed transitions are in effect when the colour variables update.
    document.documentElement.classList.add('theme-transitioning');
    if (transitionTimeout) clearTimeout(transitionTimeout);

    themes.forEach(function (x) {
      document.documentElement.classList.remove('theme-' + x);
    });
    document.documentElement.classList.add('theme-' + t);
    localStorage.setItem('theme', t);

    transitionTimeout = setTimeout(function () {
      document.documentElement.classList.remove('theme-transitioning');
      transitionTimeout = null;
    }, 750);
  }

  function nextTheme() {
    var next = themes[(themes.indexOf(currentTheme()) + 1) % themes.length];
    setTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var titleLink = document.querySelector('header h1 a');
    if (!titleLink) return;
    titleLink.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      nextTheme();
    });
  });
})();
