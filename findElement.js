/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

//Solution one

function findElement(arr, func) {                   //1
    let num = 0;                                    //2
  
    for (var i = 0; i < arr.length; i++) {          //3
      num = arr[i];                                 //4
      if (func(num)) {                              //5
        return num;                                 //6
      }
    }
  
    return undefined;                               //7
  }
  
  console.log(findElement([1,2, 3, 4], num => num % 2 === 0));


//Notes
/*
//1    This function takes in two arguments
            1. an array 
            2. a function to be performed on the array

//2    Initializes variable called num and sets it to zero

//3    For loop with three conditions
        - Initialization    =    var i = 0;
        - Condition         =    i < arr.length;
        - Final Expression  =    i++

//4    Sets the num variable initialized as 0 in //2 equal to the contents of the array upon every iteration

//5    Sets a condition with the second argument of the findElement function which is also a function that checks if the current iteration is equal to
       Two
       This condition is set in such a way that it returns the first value that is truthy in this case two.

//6    The condition then causes the rest of the loop to short circuit and return the value (2 in this case).

//7    If no element within the array passes the test (i.e num => num % 2 === 0) then num will be returned as undefined.
       This is a useful condition if the array only has uneven integers. 
*/

