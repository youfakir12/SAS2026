let word = "yassine";

function Palindrome(word) {
    let j = word.length - 1;

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[j]) {
            return false;
        }

        j--;
    }

    return true;
}

console.log(Palindrome(word));