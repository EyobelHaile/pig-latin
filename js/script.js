//Bella Haile, IT211, Date:07/07/2023


function translatePigLatin(str){
    // Check if the input is empty or a single-letter word
    str = str.toLowerCase();
    let initialVowel = str.match(/[aeiou]/);
    let initialConsonant = str. match(/[bcdfghjklmnpqrstvwxyz]/);

    if (!input || input.length === 1) {
        return "Input cannot be translated.";
      }
      // Split the input into an array of words
      const words = input.split(" ");

      const translatedWords = words.map((word) => {
        const lowercaseWord = word.toLowerCase();
    //check if a character is a vowel
        if (initialVowel(lowercaseWord[0])) {
          return lowercaseWord + "way";
        }
    // Check if the word starts with a consonant
        if (initialConsonant(lowercaseWord[0])) {
            if (initialConsonant(lowercaseWord[1])) {
              return lowercaseWord.slice(2) + lowercaseWord.slice(0, 2) + "ay";
            }
            return lowercaseWord.slice(1) + lowercaseWord[0] + "ay";
        }
    // If the word doesn't start with a vowel or consonant, return it as is
        return word;
});

return translatedWords.join(" ");
}
function initialVowel(str) {
    return /[aeiou]/i.test(str);
  }
  
  function initialConsonant(str) {
    return /[bcdfghjklmnpqrstvwxyz]/i.test(str);
  }
