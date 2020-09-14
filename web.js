var count;
var index;
var letter = "";
const text = ' at Western University ';
const text = ' Computer Science Student ';
index = 0;
(function type(){
    if(index < text.length){
        letter = text.slice(0,++index);
    }else{
        index = 0;
    }
    
    document.getElementById('typing').innerHTML = letter;
    setTimeout(type,130);

   
}());
