
function countVowel(str) { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}
const string = 'My name is Shivangi Kothe and I am a frontend develper';
const list = [...string];
const baseStrings = list.map(c1 =>  `${c1}`);

console.log(baseStrings);
const result = countVowel(string);

 console.log(result);