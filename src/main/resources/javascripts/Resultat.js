
window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", solve);
}

    function solve(){
    let x = document.getElementById("result").value;
    let y = 5*(x);
    let z = 365*(y);
    let t = 0.5*(x);
    let s = 365*(t);
    let dagDKK = document.getElementById('dagDKK').innerText = y;
    let yearDKK = document.getElementById("yearDKK").innerText = z;
    let dagKG = document.getElementById("dagKG").innerText = t;
    let yearKG = document.getElementById("yearKG").innerText = s;
}

