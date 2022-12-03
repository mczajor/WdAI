document.getElementById("btn").onclick = function(){
    var name = prompt("Twoje imie:");
    var last;
    var mr;
    if (name[name.length-1]=='a'){
        name= name.substring(0, imie.length - 1);
        last = 'e';
        mr = 'ią '
    }
    else
    {
        last = 'a';
        mr = 'a '
    }
    greetingContent = 'Witam pan' + mr + name + last;
    document.getElementById("greeting").textContent = greetingContent;
}