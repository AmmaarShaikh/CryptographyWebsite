function flip(phrase){
    var newPhrase = "";

    for (var i = phrase.length - 1; i >= 0; i--) { 
        newPhrase += phrase[i];
    }
    document.getElementById("output").innerHTML = newPhrase;
}