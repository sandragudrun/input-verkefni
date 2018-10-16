var text1 = document.querySelector("#textbox1");
var text2= document.querySelector("#textbox2");
var button = document.querySelector("button");
var kassar = document.querySelector("#kassar");

var addText = function(e){
    var text = "Ég vil fara til " +text1.value+ " með " +text2.value;
    text.value="";
    var kassi = `<div>${text} <br /> <img <img src="airplane.jpg" alt="Flugvél"> </div>`;
    kassar.innerHTML = kassi + kassar.innerHTML;
    
}

button.onclick = addText;


