var password = document.getElementById("password");

password.addEventListener("keyup", function() {
    checkstrength(password.value);
});


function checkstrength(password){
    if (password.match(/[A-Z]+/)) 
        document.getElementById("capital_letter").classList.add("met");

    else
        document.getElementById("capital_letter").classList.remove("met");

    if (password.match(/[0-9]+/))
        document.getElementById("digit").classList.add("met");

    else
        document.getElementById("digit").classList.remove("met");

    if (password.match(/[!@#$%^&*,.?:{}|<>]+/))
        document.getElementById("special_character").classList.add("met");

    else
        document.getElementById("special_character").classList.remove("met");

    if (password.length >= 8) 
        document.getElementById("length").classList.add("met");

    else
        document.getElementById("length").classList.remove("met");     
}

function passwordvisibility(password, button){
    if (password.type === "password"){
        password.type = "text";
        button.classList.add("crossed");
    }else{
        password.type = "password";
        button.classList.remove("crossed");
    } 
}

document.getElementById("show_password").onclick = function() {
    passwordvisibility(document.getElementById("password"), this);
}

document.getElementById("show_repeat_password").onclick = function() {
    passwordvisibility(document.getElementById("repeat_password"), this);
}

document.getElementById("change_password").onclick = function() {
    var passwordreq = document.getElementById("password_requirements");
    if (!passwordreq.children.length == passwordreq.querySelectorAll(".met").length){
        alert("Password does not meet requirements!");
        return;
    }
    if (document.getElementById("password").value !== document.getElementById("repeat_password").value){
        alert("Passwords do not match!");
        return;
    }
}