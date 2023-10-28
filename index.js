const button = document.querySelector('.button');
const meaning1 = document.querySelector(".meaning");
function calculateBMI(){
    let a = document.getElementById('input1').value;
    const c = parseFloat(a);
    let b = document.getElementById('input2').value;
    const d = parseFloat(b);
    const result1 = Math.pow(d, 2);
    const result2 = c/result1;
    const result3 = (Math.round(result2*100)/100);
    const numberString = String(result3);
    meaning1.innerHTML = numberString;
};
button.addEventListener('click', calculateBMI); 
