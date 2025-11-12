window.onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();

        document.getElementById('clock').innerHTML = displayDate + " " + displayTime;
    }, 1000);
}