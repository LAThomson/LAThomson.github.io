window.onload = function(){
    var clockElement = document.getElementById( "clock" );

    function updateClock ( clock ) {
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();
        clock.innerHTML = displayDate + " " + displayTime;
    };

    updateClock( clockElement );

    setInterval(function () {
        updateClock( clockElement );
    }, 1000);
}