function subtract() {
   const firstNumber = Number(document.getElementById('firstNumber').value);
   const secondNumber = Number(document.getElementById('secondNumber').value);
   const resultField = document.getElementById('result');

   let sum = Number(firstNumber - secondNumber);

   resultField.innerHTML = sum;
}
