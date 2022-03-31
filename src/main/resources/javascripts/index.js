//runs when window loads
window.onload = function() {

    //variables
    var i = 1;
    var seconds = document.getElementById('waste');

    //sets run-interval to 1 second
    function startCount() {
        setInterval(increase, 1000)
    }

    //adds to variable i and prints to html
    function increase() {
        i++;
        seconds.innerText = i * 21;
    }

    //run
    startCount();

}