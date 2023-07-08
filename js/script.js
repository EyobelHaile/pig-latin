function translatePigLatin(str){
    str = str.toLowerCase();
    let initialVowel = str.match(/[aeiou]/);
    let initialConsonant = str. match(/[bcdfghjklmnpqrstvwxyz]/);

    if (!input || input.length === 1) {
        return "Input cannot be translated.";
      }
      const words = input.split(" ");

      const translatedWords = words.map((word) => {
        const lowercaseWord = word.toLowerCase();
    
        if (initialVowel(lowercaseWord[0])) {
          return lowercaseWord + "way";
        }

        if (initialConsonant(lowercaseWord[0])) {
            if (initialConsonant(lowercaseWord[1])) {
              return lowercaseWord.slice(2) + lowercaseWord.slice(0, 2) + "ay";
            }
            return lowercaseWord.slice(1) + lowercaseWord[0] + "ay";
        }

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