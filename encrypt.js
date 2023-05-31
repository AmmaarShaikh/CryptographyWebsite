function caesarCipher(phrase, shifter){
    letters = phrase.charCodeAt();
    newPhrase = ""
    for (letter in letters){
        console.log(letter)
        newPhrase += String.fromCharCode(letter)
    }
        
}