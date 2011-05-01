function encode(){
    var text1 = document.getElementById("text_1");
    var text2 = document.getElementById("text_2");
    var key = document.getElementById("key");
    var letter;
    if(text1.value.length == key.value.length){
        text2.value = "";
        for(var i=0;i<=text1.value.length-1;i++){    
            letter = text1.value.slice(i,i+1).charCodeAt(0)-97;
            letter = letter + key.value.split("")[i].charCodeAt(0)-97;
            text2.value += letter + " ";
        }
    }
    else {
        alert("The Key must be the same length as the plain Text");
    }
}