function solve() {
   const section = document.getElementsByTagName('section');
   const result = document.getElementById('results');

   let clicked = 0;
   let CorrectAnswers = 0;

   const answers = {
      0: 'onclick',
      1: 'JSON.stringify()',
      2: 'A programming API for HTML and XML documents',
   };

   const lastQuestion = Object.keys(answers).length - 1;

   const handler = e => {
      const answer = e.target.textContent.trim();

      if (answers[clicked] === answer) {
         CorrectAnswers++;
      }

      if (clicked < lastQuestion) {
         section[clicked].style.display = 'none';
         section[clicked + 1].style.display = 'block';
         clicked++;
      } else {
         section[lastQuestion].style.display = 'none';
         result.style.display = 'block';
         document.getElementsByClassName(
            'results-inner'
         )[0].firstElementChild.textContent =
            CorrectAnswers === 3
               ? 'You are recognized as top JavaScript fan!'
               : `You have ${CorrectAnswers} right answers`;
      }
   };
   document.addEventListener('click', handler);
}
