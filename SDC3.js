//SDC3.js

const getSleepHours = day => {

  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
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

console.log(getSleepHours('friday'));
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


/* if you download this variant and run it in the terminal with: node SDC3.js, it should result: 

8
56
You've got the perfect amount of sleep.

 */