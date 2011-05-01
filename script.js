/*Encode and Decode*/

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
        alert("The Key must be the same length as The plain Text");
    }
}

function decode(){
    var text1 = document.getElementById("text_1");
    var text2 = document.getElementById("text_2");
    var key = document.getElementById("key");
    var letter;
    var key_letter;
    text1.value = "";
    for(var i=0;i<=key.value.length-1;i++){    
            letter = text2.value.split(" ")[i];
            key_letter = key.value.slice(i,i+1).charCodeAt(0)-97;
            letter = letter-key_letter;
            if(letter == "-65"){
                text1.value += " ";
            }
            else {
                text1.value += String.fromCharCode(letter+65).toLowerCase();
            }
    }
}

/*Length Meter*/

function length_1(){
    var text1 = document.getElementById("text_1");
    var length1 = document.getElementById("length_1");
    length1.innerHTML = text1.value.length;
}

function length_2(){
    var key = document.getElementById("key");
    var text1 = document.getElementById("text_1");
    var length2 = document.getElementById("length_2");
    length2.innerHTML = key.value.length;
}
