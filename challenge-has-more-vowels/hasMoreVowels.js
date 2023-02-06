//Solution 1
const hasMoreVowels = (string) => {
    let vowelCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].includes('a') || string[i].includes('e') || string[i].includes('i') || string[i].includes('o') || string[i].includes('u')) {
            vowelCount++;
        }
    }
    return vowelCount > string.length / 2
}

console.log(hasMoreVowels('harduware'));
console.log(hasMoreVowels('alaala'));


//Solution 2 - for ... of loop - loops through any iterable
const hasMoreVowels2 = (string) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count > string.length / 2
}

console.log(hasMoreVowels2('harduware'));
console.log(hasMoreVowels2('alaala'));

//Solution 3 - Regular Expression
const hasMoreVowels3 = (string) => {
    const regEx = /[aeiou]/ig;
    let vowels = string.match(regEx)
    console.log(vowels);
    return vowels.length > string.length / 2
}

console.log(hasMoreVowels3('hArduware'));
console.log(hasMoreVowels3('alaAla'));

//Solution 4 - one liner w/ regular expression
const hasMoreVowels4 = (string) => string.match(/[aeiou]/ig).length > string.length/2

console.log(hasMoreVowels4('hArduware'));
console.log(hasMoreVowels4('alaAla'));

//Solution 5 - Instructor
const hasMoreVowels5 = (string) => {
    string = string.toLowerCase();
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o','u'];
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return string.length / 2 < count;
}

//Solution 6 - filter method
const hasMoreVowels6 = (string) => {
    string = string.toLowerCase();
    let stringArr = string.split('');
    let vowels = ['a', 'e', 'i', 'o','u'];

    let filtered = stringArr.filter(element => vowels.includes(element))
    return stringArr.length / 2 < filtered.length
}