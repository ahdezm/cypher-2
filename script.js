var cypher = function(){
    "use strict";
    cypher.text1 = document.getElementById("text_1");
    cypher.text2 = document.getElementById("text_2");
    cypher.key = document.getElementById("key");
    
    cypher.encode = function(){
        var letter;
        if(this.text1.value.length === this.key.value.length){
            this.text2.value = "";
            this.text1.value = this.text1.value.toLowerCase();
            this.key.value = this.key.value.toLowerCase();
            for(var i=0;i<=this.text1.value.length-1;i++){    
                letter = this.text1.value.slice(i,i+1).charCodeAt(0)-97;
                /*Check for Special Characters*/
                var special_chars = [" ",".",",","\n","_","-",":",";","?","!"];
                var special_chars_ref = ["-65","-51","-53","-87","-2","-52","-39","-38","-34","-64"];
                for(var a = 0; a < special_chars.length; a++){
                    if(letter.toString().match(special_chars_ref[a])){
                        this.text2.value += special_chars[a];
                    }
                }
                if(letter >= 0) {
                    letter = letter + this.key.value.split("")[i].charCodeAt(0)-97;
                    if(letter > 25){
                        letter = letter-26;
                    }
                    letter = String.fromCharCode(letter+65).toLowerCase();
                    this.text2.value += letter;
                }
            }
        }
        else {
            alert("The Key must be the same length as the PlainText");
        }
    };
    cypher.decode = function(){
        var letter;
        var key_letter;
        this.text1.value = "";
        for(var i = 0; i < this.key.value.length; i++){    
                letter = this.text2.value.split("")[i].charCodeAt(0)-97;
                key_letter = this.key.value.slice(i,i+1).charCodeAt(0)-97;
                if(letter-key_letter < 0){
                    letter = letter + 26;
                }
                letter = letter-key_letter;
                switch(this.text2.value.split("")[i]){
                    case " ":
                        cypher.excep(" ");
                        break;
                    case ".": 
                        cypher.excep(".");
                        break;
                    case ".": 
                        cypher.excep(".");
                        break;
                    case ",": 
                        cypher.excep(",");
                        break;
                    case "\n": 
                        cypher.excep("\n");
                        break;
                    case "_": 
                        cypher.excep("_");
                        break;
                    case "-": 
                        cypher.excep("-");
                        break;
                    case ":": 
                        cypher.excep(":");
                        break;
                    case ";": 
                        cypher.excep(";");
                        break;
                    case "?": 
                        cypher.excep("?");
                        break;
                    case "!": 
                        cypher.excep("!");
                        break;
                    default:
                        this.text1.value += String.fromCharCode(letter+65).toLowerCase();
                        break;
                }
        }
    };
    cypher.random_key = function(){
        var chars = "abcdefghiklmnopqrstuvwxyz";
        var text1 = document.getElementById("text_1");
        var key = document.getElementById("key");
        var string_length = text1.value.length;
        if(text1.value.length > 0){
            key.value = "";
            for (var i=0; i<string_length; i++) {
                var num = Math.floor(Math.random()*chars.length);
                key.value += chars.substring(num,num+1);
            }
             document.getElementById("length_2").innerHTML = cypher.key.value.length;
        }
        else {
            alert("No plaintext avalible");    
        }
    };
    cypher.excep = function(string){
        this.text1.value += string;
    };
    
    document.getElementById("encode").addEventListener("click",function(){
        cypher.encode();
    },false);
    document.getElementById("decode").addEventListener("click",function(){
        cypher.decode();
    },false);
    document.getElementById("random_key").addEventListener("click",function(){
        cypher.random_key();
    },false);
    
    cypher.text1.addEventListener("keyup",function(){
        document.getElementById("length_1").innerHTML = cypher.text1.value.length;
    },false);
    cypher.key.addEventListener("keyup",function(){
        document.getElementById("length_2").innerHTML = cypher.key.value.length;
    },false);
};

cypher();