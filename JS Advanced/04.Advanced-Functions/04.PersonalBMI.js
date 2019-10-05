function solve(name, age, weight, height) {
   let personalChart = {};

   personalChart['name'] = name;
   personalChart['personalInfo'] = { age: age };
   personalChart['personalInfo']['weight'] = weight;
   personalChart['personalInfo']['height'] = height;

   personalChart['BMI'] = Math.round(
      weight / ((height / 100) * (height / 100)),
   );

   if (personalChart['BMI'] < 18.5) {
      personalChart['status'] = 'underweight';
   } else if (personalChart['BMI'] >= 18.5 && personalChart['BMI'] < 25) {
      personalChart['status'] = 'normal';
   } else if (personalChart['BMI'] >= 25 && personalChart['BMI'] < 30) {
      personalChart['status'] = 'overweight';
   } else {
      personalChart['status'] = 'obese';
   }

   if (personalChart['status'] === 'obese') {
      personalChart['recommendation'] = 'admission required';
   }

   return personalChart;
}
