// /**
//  * Any of the examples below will accomplish the
//  * same task: reversing a string.
//  * 
//  * Which of these examples is best? Why?
//  * Note that there is no "correct" answer.
//  */
// function reverseString(str) {
//     const strArray = str.split("");
//     const revArray = strArray.reverse();
//     const revString = revArray.join("");
//     return revString;
//   }
  
//   function reverseString2(str) {
//     return str.split("").reverse().join("");
//   }
  
//   function reverseString3(str) {
//     let revString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       revString += str[i];
//     }
//     return revString;
//   }
  
//   function reverseString4(str) {
//     if (str === "") return "";
//     else return reverseString4(str.substr(1)) + str.charAt(0);
//   }
  
//   function reverseString5(str) {
//     return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
//   }
  
//   console.log(reverseString("!dlroW olleH"))
//   console.log(reverseString2("!dlroW olleH"))
//   console.log(reverseString3("!dlroW olleH"))
//   console.log(reverseString4("!dlroW olleH"))
//   console.log(reverseString5("!dlroW olleH"))




// Part 1: Thinking Functionally
// 1.1. Take and array of numbers and return the sum. -- This Part Works !

 let numbers = [5, 6, 7, 8, 9]

 const oneArray = function (array) {                //using a for loop method
    let total = 0;
    for (let i=0; i< array.length; i++){
        total += array[i]
    }
    return total;
 };
 console.log(oneArray(numbers)); // 35 like KD 

// 1.2. Take an array of numbers and return the average.

let numbers2 = [5, 6, 7, 8, 9]

function getAvg(array) {
    let total = 0; 
    for (let i = 0; i < array.length; i++) {
    total += array[i]; 
    }
    return total / array.length;   // this calculates to give the average

}
console.log(getAvg(numbers2)); // close Miami lebron big no cigar, still perfect(7)


// the reduce method can work as well
// const getAvg = (array) =>
//     array.reduce((sum,currentvalue) => sum + currentvalue, 0) / array.length;



//1.3. Take array of strings and return the longest string -- This works !!

let superString = ["superman", "Batman", "Flash"]

function findLongestString(arr) {
    if (arr.length === 0) return null;
  
    let longest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    
    return longest;
  }
  console.log(findLongestString(superString)); // Batman is better by the way.


  //1.4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. -- This part works !!!!
  //For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

  let stringnum = (['why', 'hello', 'there', 'guten', 'morgen'])
  
 const stringLongerThan = function (array, num) {
    let result = []
    for (let i = 0 ; i < array.length; i++) {   // for loop to check in this 3
        if (array[i].length > num) {
            result.push(array[i]);
        }
    }
    return result;
 }
 console.log(stringLongerThan (stringnum, 3)); // Why hello there guten morgen !



 //1.5. Take a number, n, and print every number between 1 and n without using loops. Use recursion. This works !!!
 //
let n = 30 

function printNum(n) {
    if (n > 0) {
        printNum(n -1);
        console.log(n);
    }    
    
}     
console.log(printNum(n)); // give them 30 Steph Curry 





console.log('==========================================================================================================================================================================')




  //Part 2: Thinking Methodically
  // Part 2.1 -- This part works 
 
 let list = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

    //Use callback functions alongside Array methods to accomplish the following: By using Callback Functions
    // Sort the array by age.

    function sortByAges(arr) {           //this is done using the sort method 
        arr.sort((a, b) => a.age - b.age);
        return arr;                         // this can produce the sorted array
    }
     console.log(sortByAges(list)); // logs the new sorted array to console. Toggle comment this line for following code below


 // Part 2.2            --Fixed should work now, but its printing reverse order in sorted ages because its sorting the 'id' in order compared to the 'ages' This shouldn't matter as the question doesn't ask for order.
 //Filter the array to remove entries with an age greater than 50.

    const newfliterlist = list.filter(person => person.age <= 50 );
    console.log(newfliterlist);
   


        //old, disregard this 
    //  function= filtByage(arr. callback) {
    //     return arr.filter(callback);
    //  }
    //  function belowAge50(person) {
    //         return person.age <= 50;
    //  }



//Part 2.3 
//Map the array to change the “occupation” key to “job” and increment every age by 1.












//Part 2.4
//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.

function totalAge (array)  {                       // Fix
const sumAges = array.reduce ((accumulator, obj) => {       // this should keep in keeping with using the callback functions
    return accumulator + num(obj.age)
}, 0);
    return sumAges; // may comment out 

}
console.log(totalAge) /// try it 


//Then use the result to calculate the average age.

const sumAges = totalAge(list)
const avgAge = totalAge / list.length;




//Part 3.1: Thinking Critically - Working just printing twice IDK anymore
//Take an object and increment its age field.

const person = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

function incrementAge(obj) {
    obj.age = (parseInt(obj.age) + 1).toString(); // I wanted to keep the same structure with the string placement rather than as an interger
    return obj;
}

console.log(incrementAge(person)); // this should work, Test/Review, its printing double interesting


//Part 3.2
//Take an object, make a copy, and increment the age field of the copy. Return the copy.


//const person = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

function incrementAgeCpy(obj) {
 const copyPerson = {... obj}; //// Fix need to do as instructed above 
    let objCopy = {};

    for (let key in obj) {
        objCopy[key] = obj[key];
    }
    objCopy.age= (parseInt(objCopy.age) + 1).toString(); // similar as the preivous function example in keeping with the same structure 
    return objCopy;
}
console.log(incrementAgeCpy(person));

console.log(person)


console.log('==========================================================================================================================================================================')


























































