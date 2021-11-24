let sum = "";

function addToSum(operator) {
    sum = sum + operator;
    console.log(sum);
    document.getElementById("output").innerText = sum;
}

function evalSum() {
    sum = eval(sum);
    document.getElementById("output").innerText = sum;
}

function clearSum() {
    sum = "",
    document.getElementById("output").innerText = sum;
}

function delChar() {
    sum = sum.slice(0, -1);
    document.getElementById("output").innerText = sum;
}           