(function () {
  const themes = ['warm', 'cool', 'dusk'];

  function currentTheme() {
    return themes.find(t => document.documentElement.classList.contains('theme-' + t)) || 'warm';
  }

  function setTheme(t) {
    themes.forEach(x => document.documentElement.classList.remove('theme-' + x));
    document.documentElement.classList.add('theme-' + t);
    localStorage.setItem('theme', t);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const titleLink = document.querySelector('header h1 a');
    if (!titleLink) return;
    titleLink.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      const next = themes[(themes.indexOf(currentTheme()) + 1) % themes.length];
      setTheme(next);
    });
  });
})();
