// Write a function that takes an array of characters and reverses the letters in place.

// let input = "hello".split("");
// console.log(input);
/****** Breakdown ******/

//Start iterating through the given array
//while iterating have a pointer keeping track of the first index
//simultaneously have a second pointer keeping track of the element adjacent to our first element

function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    // Swapping
    const init = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = init;

    leftIndex++;
    rightIndex--;
  }
  return arrayOfChars;
}

console.log(reverse(["i", "n", "p", "u", "t"]));
