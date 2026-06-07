document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.clock-toggle');
  var display = document.querySelector('.clock-display');
  if (!toggle || !display) return;

  var intervalId = null;
  var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
                'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

  function pad(n) { return String(n).padStart(2, '0'); }

  function ordinal(n) {
    if (n >= 11 && n <= 13) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  function update() {
    var now = new Date();
    var day = now.getDate();
    var date = day + ordinal(day) + ' ' + months[now.getMonth()];
    var time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    display.textContent = date + ' ' + time;
  }

  function show() {
    display.hidden = false;
    update();
    intervalId = setInterval(update, 1000);
    localStorage.setItem('clockVisible', '1');
  }

  function hide() {
    display.hidden = true;
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
    localStorage.setItem('clockVisible', '0');
  }

  if (localStorage.getItem('clockVisible') === '1') show();

  toggle.addEventListener('click', function () {
    if (display.hidden) show(); else hide();
  });
});
