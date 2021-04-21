//SDC2.js

const getSleepHours = day => {

  switch(day) {
    case 'monday':
      return 3
      break;
    case 'tuesday':
      return 4
      break;
    case 'wednesday':
      return 5
      break;
    case 'thursday':
      return 9
      break;
    case 'friday':
      return 10
      break;
    case 'saturday':
      return 5
      break;
    case 'sunday':
      return 6
      break;
   default:
     return "Error!" 
 }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log("You've got the perfect amount of sleep.");
  }

  else if(actualSleepHours > idealSleepHours) {
    console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep this week.");
  }

  else if(actualSleepHours < idealSleepHours) {
    console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
  }

else {
  console.log("Error! Something went wrong, check your code");
  }
};

calculateSleepDebt();

/* if you download this file and you run it in terminal with: node SDC2.js, the result should be:

3
42
You should get some rest because you've slept 14 hours less than you should have this week.

*/