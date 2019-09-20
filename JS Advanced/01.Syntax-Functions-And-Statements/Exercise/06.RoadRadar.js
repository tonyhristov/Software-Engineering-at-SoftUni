function solve(array) {
   let speed = array[0];
   let area = array[1];

   if (area === 'motorway') {
      if (speed > 130 && speed <= 150) {
         console.log('speeding');
      } else if (speed > 130 && speed <= 170) {
         console.log('excessive speeding ');
      } else if (speed >= 170) {
         console.log('reckless driving ');
      }
   }else if(area === "interstate"){
    if (speed > 90 && speed <= 110) {
        console.log('speeding');
     } else if (speed > 90 && speed <= 130) {
        console.log('excessive speeding ');
     } else if (speed >= 130) {
        console.log('reckless driving ');
     }
   }else if(area === "city"){
    if (speed > 50 && speed <= 70) {
        console.log('speeding');
     } else if (speed > 50 && speed <= 90) {
        console.log('excessive speeding ');
     } else if (speed >= 90) {
        console.log('reckless driving ');
     }
   }else{
    if (speed > 20 && speed <= 40) {
        console.log('speeding');
     } else if (speed > 60 && speed <= 60) {
        console.log('excessive speeding ');
     } else if (speed >= 60) {
        console.log('reckless driving ');
     }
   }
}

solve([21, 'residential'])
