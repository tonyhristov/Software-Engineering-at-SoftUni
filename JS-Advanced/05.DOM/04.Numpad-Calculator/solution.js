function solve() {
   let calculationsStr = '';
   Array.from(document.querySelectorAll('button')).map(x =>
      x.addEventListener('click', e => {
         let press = e.target.value;
         let inputField = document.getElementById('expressionOutput');
         let resultField = document.getElementById('resultOutput');

         if (press === 'Clear') {
            inputField.innerHTML = '';
            resultField.innerHTML = '';
            calculationsStr = '';
         } else if (press === '=' && calculationsStr.length > 1) {
            let num = calculationsStr.split(' ');
            if (num[2] === '') {
               resultField.innerHTML = 'NaN';
            }
            let sum = eval(`${num[0]} ${num[1]} ${num[2]}`);
            resultField.innerHTML = sum;
         } else {
            if (
               press !== '+' &&
               press !== '-' &&
               press !== '/' &&
               press !== '*'
            ) {
               calculationsStr += press;
               inputField.innerHTML = calculationsStr;
            } else {
               calculationsStr += ' ' + press + ' ';
               inputField.innerHTML = calculationsStr;
            }
         }
      })
   );
}
