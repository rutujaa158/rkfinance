
function calculateEMI() {

let p = document.getElementById("amount").value;
let r = document.getElementById("rate").value/12/100;
let n = document.getElementById("months").value;

let emi =
(p*r*Math.pow(1+r,n)) /
(Math.pow(1+r,n)-1);

document.getElementById("result")
.innerHTML = "EMI = " + emi.toFixed(2);

}
