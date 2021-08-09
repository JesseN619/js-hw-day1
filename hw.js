//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

let findWords = (dog_string, dog_names) => {
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_string[i])) {
            return "Matched dog_name"
        }
    }
    return "No Matches"
};

console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.
*/

// given_arr == [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * 2 > 50) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
};

console.log(replaceEvens([13, 22, 26, 40, 1, 10]))

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...



// Codewars 1
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
function boolToWord(bool) {
    return bool == true ? "Yes" : "No"
}

// Codewars 2
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str) {
    let arr = [];
    let current_str = '';
    for (let i = 0; i < str.length; i++) {
        current_str += str[i]
        if (current_str.length == 2) {
            arr.push(current_str)
            current_str = ''
        } else if (i == str.length - 1) {
            current_str += '_'
            arr.push(current_str)
        }
    }
    return arr
};