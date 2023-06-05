function caesarCipherDecrypt(phrase, shifter){
    letters = phrase.split('');
    newPhrase = "Your decrypted phrase is :"
    for (letter of letters){
        newLetter = letter.charCodeAt(0)
        console.log(newLetter)
        newLetter -= shifter
        newPhrase += String.fromCharCode(newLetter)
    }
    document.getElementById("output").innerHTML = newPhrase;
}