// alert("확인")
function forclear() {
    document.getElementById("output").innerHTML="0";
}
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML=value;
}
function fordisplay(myvalue) {
    document.getElementById("output").innerHTML+=myvalue
}
