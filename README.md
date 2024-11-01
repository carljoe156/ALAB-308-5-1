# ALAB-308-5-1
Creating Reusable Functions
Objectives
•Create reusable blocks of code with functions.
•Implement Array object methods.

Legend 
Made [] - Made the Function
Working [] - It is functional
[✓] - Working  [?]- Still in Progress

Part 1: Thinking Functionally

This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.

While there is rarely a “correct” answer in programming, it is important to keep your audience (other programmers) in mind. Write functions with descriptive names, and clear inputs and outputs.
With that in mind, write functions that accomplish the following:
• Take an array of numbers and return the sum.
Made [✓] - Working [✓]
• Take an array of numbers and return the average.
Made [✓] - Working [✓]
• Take an array of strings and return the longest string.
Made [✓] - Working [✓]
• Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Made [✓] - Working [✓]
• Take a number, n, and print every number between 1 and n    without using loops. Use recursion.
Made [✓] - Working [✓]


Part 2: Thinking Methodically

When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.

For the tasks below, use the following data to test your work:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

Use callback functions alongside Array methods to accomplish 
the following:
• Sort the array by age.  Made [✓] - Working [✓]
• Filter the array to remove entries with an age greater than 50.  Made [✓] - Working [✓]
• Map the array to change the “occupation” key to “job” and increment every age by 1. 
Made [?]- Working [?] 
• Use the reduce method to calculate the sum of the ages. 
Made [✓] - Working [✓]
 Then use the result to calculate the average age. 
 Made [✓] - Working [✓]

 Part 3: Thinking Critically

It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.

For this section, develop functions that accomplish the following:
• Take an object and increment its age field.
Made [✓] - Working [✓]
• Take an object, make a copy, and increment the age field of the copy. Return the copy.
Made [✓] - Working [✓]

For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time. Made [?]- Working [?] 

Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
Made [?]- Working [?] 
