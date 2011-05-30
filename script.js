/*Encode and Decode*/

function encode(){
    var text1 = document.getElementById("text_1");
    var text2 = document.getElementById("text_2");
    var key = document.getElementById("key");
    var letter;
    if(text1.value.length == key.value.length){
        text2.value = "";
        text1.value = text1.value.toLowerCase();
        key.value = key.value.toLowerCase();
        for(var i=0;i<=text1.value.length-1;i++){    
            letter = text1.value.slice(i,i+1).charCodeAt(0)-97;
            console.log(letter);
            var special_chars = new Array(" ",".",",","\n","_","-",":",";","?","!");
            var special_chars_ref = new Array("-65","-51","-53","-87","-2","-52","-39","-38","-34","-64");
            for(var a=0;a<=special_chars.length;a++){
                if(letter == special_chars_ref[a]){
                    text2.value += special_chars[a];
                }
            }
            if(letter >= 0) {
                letter = letter + key.value.split("")[i].charCodeAt(0)-97;
                if(letter > 25){
                    letter = letter-26;
                }
                letter = String.fromCharCode(letter+65).toLowerCase();
                text2.value += letter;
            }
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
            letter = text2.value.split("")[i].charCodeAt(0)-97;
            key_letter = key.value.slice(i,i+1).charCodeAt(0)-97;
            if(letter-key_letter < 0){
                letter = letter + 26;
            }
            letter = letter-key_letter;
            if(text2.value.split("")[i] == " "){
                text1.value = text1.value +  " ";
            }
            else if(text2.value.split("")[i] == "."){
                text1.value += ".";
            }
            else if(text2.value.split("")[i] == ","){
                text1.value += ",";
            }
            else if(text2.value.split("")[i] == "\n"){
                text1.value += "\n";
            }
            else if(text2.value.split("")[i] == "_"){
                text1.value += "_";
            }
            else if(text2.value.split("")[i] == "-"){
                text1.value += "-";
            }
            else if(text2.value.split("")[i] == ":"){
                text1.value += ":";
            }
            else if(text2.value.split("")[i] == ";"){
                text1.value += ";";
            }
            else if(text2.value.split("")[i] == "?"){
                text1.value += "?";
            }
            else if(text2.value.split("")[i] == "!"){
                text1.value += "!";
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

/*Random Key Generator*/

function random_key(){
    var chars = "abcdefghiklmnopqrstuvwxyz";
    var text1 = document.getElementById("text_1");
    var key = document.getElementById("key");
    var string_length = text1.value.length;
    if(text1.value.length>0){
        key.value = "";
        for (var i=0; i<string_length; i++) {
    	    var num = Math.floor(Math.random()*chars.length);
		    key.value += chars.substring(num,num+1);
	    }
        /*Updates Plaintext Length Counter*/
        length_2();
    }
    else {
        /*If Plaintext is Empty*/
		alert("The Plaintext must have a value largen than 0");    
    }
}
