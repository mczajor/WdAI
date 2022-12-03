var password = document.getElementById("password");

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


password.addEventListener("keyup", function() {
    checkstrength(password.value);
});


document.getElementById("show_password").onclick = function() {
    passwordvisibility(document.querySelector("#password"), this);
}


document.getElementById("show_repeat_password").onclick = function() {
    passwordvisibility(document.querySelector("#repeat_password"), this);
}


document.addEventListener('keypress' ,function(event) {
    if (event.key === "Enter") {
        var passwordreq = document.querySelector("#password_requirements");

        if (!passwordreq.children.length == passwordreq.querySelectorAll(".met").length){
            alert("Password does not meet requirements!");
            return;
        }

        if (document.getElementById("password").value !== document.getElementById("repeat_password").value){
            alert("Passwords do not match!");
            return;
        }
    }
});