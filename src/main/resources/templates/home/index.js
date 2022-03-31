window.onload = function() {

    var i = 1;
    var seconds = document.getElementById('waste');

    function startCount() {
        setInterval(increase, 1000)
    }

    function increase() {
        i++;
        seconds.innerHTML = i * 21;
    }

    startCount();

}