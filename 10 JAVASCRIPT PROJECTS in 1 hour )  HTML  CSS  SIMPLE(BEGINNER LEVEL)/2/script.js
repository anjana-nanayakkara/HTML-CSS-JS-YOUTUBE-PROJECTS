var loader;
function showText(){
    document.getElementById("loading").style.display="none";
    document.getElementById("textContainer").style.display = "block";
}

function loading(){
    loader = setTimeout(showText,4000);
}