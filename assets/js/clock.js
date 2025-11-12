(function () {

  var clockElement = document.getElementById( "clock" );

  function updateClock ( clock ) {
    clock.innerHTML = new Date().toLocaleTimeString();
  };

  updateClock( clockElement );
  
  setInterval(function () {
      updateClock( clockElement );
  }, 1000);

}());