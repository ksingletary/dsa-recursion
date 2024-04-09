/** product: calculate the product of an array of numbers. */

function product(nums) {
  //Base case: if nums is empty, return 1
  if (nums.length === 0) return 1;

  //Recursive case: multiply the first number with the result of the product of the rest of the array
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //Base case: if the array only has one word, return its length
  if (words.length === 1) return words[0].length;

  //Recursive case: compare the length of the first word with the result of the longest of the rest of the array
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //Base case: if the string is empty or has only one character, return it
  if (str.length <= 1) return str;

  //Recursive case: take the first character and concatenate with everyOther call starting from the third character
  return str[0] + everyOther(str.substring(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
 //Base case: if the length is 0 or 1, it's a palindrome
  if (str.length <= 1) return true;

  // Check if the first and last chars are the same
  if (str[0] === str[str.length - 1]) {
    // Recursive step: call isPalindrome on the substring excluding the first and last chars
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    // If the first and last chars are different, not a palindrome
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {
  //Base case: if the array is empty, return -1
  if (arr.length === 0) return -1;

  // Check if the first element is the value
  if (arr[0] === val) {
    return currentIndex;
  }

  // Recursive step: call findIndex on the rest of the arrays and increment the currentIndex
  return findIndex(arr.slice(1), val, currentIndex + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  //Base case: if the string is empty or has only one char, return it
  if (str.length <= 1) return str;

  // Recursive case: concatenate the last char with the reversed rest of the string
  return str.charAt(str.length - 1) + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      // If the property is a string, push to the result array
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      // If the property is an object, recursively call gatherStrings and concatenate the result to the result array
      result = result.concat(gatherStrings(obj[key]));
    }  
  }
  return result;
}



// further study

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
