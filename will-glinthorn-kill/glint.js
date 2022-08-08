document.getElementById("Calculate").addEventListener("click", calculate);

function calculate(){
    let p1 = Number(document.getElementById("p1").value);
    let p2 = Number(document.getElementById("p2").value);
    let p3 = Number(document.getElementById("p3").value);
    let openMana = Number(document.getElementById("openMana").value);
    let result = document.getElementById("result");
    if(p1 < 0 || p2 < 0 || p3 < 0){
        result.textContent = "No Negative numbers, please!";
        result.setAttribute("style", "color: red");
    } else if(openMana < 2){
        result.textContent = "You need at least two mana to start the loop.";
        result.setAttribute("style", "color: red");
    } else if(openMana + p1 + p2 + p3 - 2*Math.max(p1, p2, p3) >= 1){
        result.textContent = "The combo will kill";
        result.setAttribute("style", "color: green");
    } else if(openMana + p1 + p2 + p3 - 2*Math.max(p1, p2, p3) < 1){
        result.textContent = "The combo will not kill";
        result.setAttribute("style", "color: red");
    } else {
        result.textContent = "Error in calculation.";
        result.setAttribute("style", "color: red");
    }
}