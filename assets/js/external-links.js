document.addEventListener('DOMContentLoaded', function () {
  var here = window.location.hostname;
  document.querySelectorAll('a[href]').forEach(function (link) {
    try {
      var url = new URL(link.href);
      var isHttp = url.protocol === 'http:' || url.protocol === 'https:';
      if (isHttp && url.hostname && url.hostname !== here) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    } catch (e) { /* malformed href — skip */ }
  });
});
