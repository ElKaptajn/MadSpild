window.onload = function() {

    let s = 1;
    let waste = document.getElementById('waste');

    function increase() {
        s++;
        waste.innerText = s * 21;
    }

    function startCount() {
        setInterval(increase, 1000)
    }

    startCount();

}