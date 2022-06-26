const string = "Привет! Как дела?";
const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]
const getVowels = Filterstring => {
    let extractedVowels = "";
for (let i = 0; i < Filterstring.length; i++) {
  const currentLetter = Filterstring[i].toLowerCase();
if (vowels.includes(currentLetter)) {
    extractedVowels += currentLetter;
}

}
return extractedVowels;
}
console.log(getVowels(string));