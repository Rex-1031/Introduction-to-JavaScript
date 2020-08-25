/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 21;
console.log(votingAge > 18);



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let a = 100;
let b = 50;
if (a > b ){
  a = a - b;
}
else{
    a = a + b;
}
console.log(a);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));




//Task d: Write a function to multiply a*b 

function multi (a, b){
    return a * b;
}
console.log(multi(2, 10));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears (age){
    return age * 7;
}

console.log(dogYears(37));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder (pounds, age){

    if (age <= .332){
            return pounds * .1;
        }

    else if (age <= .582){
            return pounds * .05;
        }

    else if (age <= .999) {
            return pounds * .04;
        }
       
    else if (age >= 1 && pounds <= 5.99){
            return 0.05 * pounds;
        }

    else if (age >= 1 && pounds <= 10.99){
            return pounds * 0.04;
        }

    else if (age >= 1 && pounds <= 15.99){
            return pounds * .03;
        }
    else if (age >= 1 && pounds > 15){
            return pounds * .02;
        
    }else {
        return "Please enter dog age (months in decimals) and weight"
    }
}

console.log(dogFeeder(15, 1))

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  function rps (myPick){
      let compChoice =  Math.floor(Math.random() * Math.floor(3));

      if (compChoice === 0){
          compChoice = "scissors";
      }
        else if (compChoice === 1){
        compChoice = "paper";
        }else {
        compChoice = "rock";
      }

    

     if (myPick === "scissors" && compChoice === "rock"){
          return `You: ${myPick} v. Computer: rock. You Lose!`;
      } 
      
      else if (myPick === "scissors" && compChoice === "paper"){
          return `You: ${myPick} v. Computer: paper.  You Win!`;
      }

      else if (myPick === "rock" && compChoice === "paper"){
            return `You: ${myPick} v. Computer: paper. You Lose!`;
      }

      else if (myPick === "rock" && compChoice === "scissors"){
          return `You: ${myPick} v. Computer: scissors. You Win!`;
      }

      else if (myPick === "paper" && compChoice === "scissors"){
          return `You: ${myPick} v. Computer: scissors. You Lose!`;   
      }
      else if (myPick === "paper" && compChoice === "rock"){
          return `You: ${myPick} v. Computer: rock.  You Win!`;
      }
      else if (myPick === compChoice){
          return  `You: ${myPick}  v.  Computer: ${compChoice}. Tie!`;
      }
      else{
          return "Please write: rock, paper, or scissors."
      }



  }
  console.log(rps("rock"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

  function convertToMiles (km){
       let miles = km * 0.62137;
      return `${miles} mi`

  }
  console.log(convertToMiles(12));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
    function convertToCentimeters (ft){
        let centimeters = ft * 30.48;
        return `${centimeters} cm`;
    }
    console.log(convertToCentimeters(5));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong (num) {
    for (let i = num; i > 0; i-- ){ 
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around, ${i -1} bottles of soda on the wall...`);  
    }
}
    annoyingSong(5);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade (gradePercentage){
    if (gradePercentage > 89.9){
        return "A";
    }
    else if (gradePercentage > 79.9){
        return "B";
    }
    else if (gradePercentage > 69.9){
        return "C";
    }
    else if (gradePercentage > 59.9){
        return "D";
    }
    else if (gradePercentage < 60)
        return "F";
    else{
        return "Please enter a grade percentage."
    }

}
  console.log(grade());
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

    

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers scissors code below to take a prompt from a user using the window object





