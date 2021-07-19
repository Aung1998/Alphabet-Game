const alphabet = "abcdefghijklmnoppqrstuvwxyz";

// Function to check if character pick is in the right alphabet order

function checkAlphabet(str){
    return str[0] == 'a' && alphabet.includes(str);
}