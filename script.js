const alphabet = "abcdefghijklmnopqrstuvwxyz"; //Alphabet string which contain all alphabet in order

// Function to check if character pick is in the right alphabet order

function checkAlphabet(str){
    return str[0] == 'a' && alphabet.includes(str);
}