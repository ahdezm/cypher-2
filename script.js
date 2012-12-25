var cypher = function(){
    "use strict";
    cypher.plain = document.getElementById("plain");
    cypher.cypher = document.getElementById("cypher");
    cypher.key = document.getElementById("key");
    cypher.lengthPlain = document.getElementById("length_plain");
    cypher.lengthKey = document.getElementById("length_key");
    
    cypher.encode = function(){
        var letter;
        if(this.plain.value.length === this.key.value.length){
            this.cypher.value = "";
            this.plain.value = this.plain.value.toLowerCase();
            this.key.value = this.key.value.toLowerCase();
            for(var i=0;i<=this.plain.value.length-1;i++){    
                letter = this.plain.value.slice(i,i+1).charCodeAt(0)-97;
                /*Check for Special Characters*/
                var special_chars = [" ",".",",","\n","_","-",":",";","?","!"];
                var special_chars_ref = ["-65","-51","-53","-87","-2","-52","-39","-38","-34","-64"];
                for(var a = 0; a < special_chars.length; a++){
                    if(letter.toString().match(special_chars_ref[a])){
                        this.cypher.value += special_chars[a];
                    }
                }
                if(letter >= 0) {
                    letter = letter + this.key.value.split("")[i].charCodeAt(0)-97;
                    if(letter > 25){
                        letter = letter-26;
                    }
                    letter = String.fromCharCode(letter+65).toLowerCase();
                    this.cypher.value += letter;
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
        this.plain.value = "";
        for(var i = 0; i < this.key.value.length; i++){    
            letter = this.cypher.value.split("")[i].charCodeAt(0)-97;
            key_letter = this.key.value.slice(i,i+1).charCodeAt(0)-97;
            if(letter-key_letter < 0){
                letter = letter + 26;
            }
            letter = letter-key_letter;
            var character = this.cypher.value.split("")[i];
            if(Array.prototype.filter.call([" ",".",",","\n","_","-",":",";","?","!"],function(self){return (self == character)}).length > 0){
                this.plain.value += character;
            } else {
                this.plain.value += String.fromCharCode(letter+65).toLowerCase();
            }
        }
    };
    cypher.random_key = function(){
        var string = this.plain.value;
        if(this.plain.value.length > 0){
            this.key.value = "";
            window.$.get("http://www.random.org/strings/?num=1&digits=off&upperalpha=off&loweralpha=on&unique=on&format=plain&rnd=new&len=" + string.length,(function(data){
                this.key.value = data.slice(0,string.length);
                this.lengthKey.innerHTML = this.key.value.length;
            }).bind(this));
        }
        else {
            alert("No plaintext avalible");
        }
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
    
    cypher.plain.addEventListener("keyup",function(){
        cypher.lengthPlain.innerHTML = cypher.plain.value.length;
    },false);
    cypher.key.addEventListener("keyup",function(){
        cypher.lengthKey.innerHTML = cypher.key.value.length;
    },false);
};

cypher();