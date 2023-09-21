//Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”
const input = 'turpentine and turtles';

//Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword

const vowels = ['a','e','i','o','u'];


//Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

const resultArray = [];


//Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

for(let i = 0; i < input.length; i++){
    if(input[i] === 'e'){ // if statement to equal to 'e'
    resultArray.push(input[i]);// this push the generated array to the resultArray
  }
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
  //console.log(' i is ' +i);
  for(let j = 0; j < vowels.length; j++){//this is inner nested for loop created to compare the outer loop
    //console.log('j is ' +j);
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
      //console.log(input[i]);
       
  }
  }
}
//the .join() method can be used to make a continuous string and that the .toUpperCase() function can be used to make a string uppercase.
//console.log(resultArray);
const resultString = resultArray.join(' ').toUpperCase();
console.log(resultString);
