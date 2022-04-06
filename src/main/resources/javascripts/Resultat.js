
window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", solve);
}

    function solve(){
    let x = document.getElementById("result").value;
    let y = 5*(x);
    let z = 365*(y);
    let t = 1.5*(x);
    let s = 365*(t);
    let dagDKK = document.getElementById('dagDKK').innerText = y;
    let yearDKK = document.getElementById("yearDKK").innerText = z;
    let dagKG = document.getElementById("dagKG").innerText = t;
    let yearKG = document.getElementById("yearKG").innerText = s;
}


window.onload = function() {
    var button = document.getElementById("button");
    button.addEventListener("click", solve1);
}

function solve1(){
    let p = document.getElementById("result1").value;
    let o = 5*(p);
    let i = 365*(o);
    let k = 1.5*(p);
    let l = 365*(k);
    let dagDKK = document.getElementById('dagDKK').innerText = o;
    let yearDKK = document.getElementById("yearDKK").innerText = i;
    let dagKG = document.getElementById("dagKG").innerText = k;
    let yearKG = document.getElementById("yearKG").innerText = l;
}