// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(items.length)
}

getLength(items, function(measure){
  console.log(measure)
})


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items[items.length-1])
}

last(items,function(lastItem){
  console.log(lastItem)
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}
const x = 220
const y = 2

sumNums(x, y, function (total){
  console.log(`The sum of ${x} and ${y} is ${total}.`)
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}

multiplyNums(x, y, function(multipliedTotal){
  console.log(`${x} multiplied by ${y} equals ${multipliedTotal}.`)
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item))
}
const list = items
const item1 = 'Notebook'
const item2 = 'Backpack'

contains(item2, list, function(doesItHave){
  console.log(`Is ${item2} on the shopping list? ${doesItHave}.`)
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
