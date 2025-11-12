(function () {

  var clockElement = document.getElementById( "clock" );

  function updateClock ( clock ) {
    clock.innerHTML = new Date().toLocaleTimeString();
  }

  updateClock()
  
  setInterval(function () {
      updateClock( clockElement );
  }, 1000);

}());