// alert("확인")


/* 버튼 클릭시 출력창에 표시하게 해주는 함수 */
function printDisplay(myvalue) {
    removeZero()
    document.getElementById("output").innerHTML+=myvalue
}
/* //버튼 클릭시 출력창에 표시하게 해주는 함수 */

/* C버튼 클릭시 출력값을 0으로 리셋시키는 함수 */
function reset() {
    document.getElementById("output").innerHTML="0";
}
/* // C버튼 클릭시 출력값을 0으로 만드는 함수 */

/* %버튼 클릭시 백분율로 변환해주는 함수 */
function perc() {
    removeZero()
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML=value;
}
/* //%버튼 클릭시 백분율로 변환해주는 함수 */

/* 계산기 값 입력시 0표시 제거해주는 함수 */
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value=="0") {
        value = " "
        document.getElementById("output").innerHTML=value;
    }
}
/* //계산기 값 입력시 0표시 제거해주는 함수 */

/* =버튼 클릭시 결과값 출력시켜주는 함수 */
function result() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var result = eval(equation);
    document.getElementById("output").innerHTML=result;
}
/* //=버튼 클릭시 결과값 출력시켜주는 함수 */