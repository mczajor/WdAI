
function isValid(){
    return document.getElementById("name").checkValidity() && 
    document.getElementById("phone").checkValidity()
}

function constructEntry(name, phone){
    
    var entry = document.createElement("section");

    var entry_left = document.createElement('div');
    entry_left.classList.add('entry-left');
    
    var entry_left_head = document.createElement('h3');
    entry_left_head.textContent=name;

    var entry_left_p = document.createElement('p');
    entry_left_p.textContent=phone;

    entry_left.appendChild(entry_left_head);
    entry_left.appendChild(entry_left_p);
    entry.appendChild(entry_left);


    var entry_right = document.createElement('div');
    entry_right.classList.add("entry-right");
    entry_right.textContent="Usun";

    entry_right.addEventListener('click', deleteEntry);
    entry.appendChild(entry_right);

    return entry;
}

function deleteEntry(){
    var parent = document.getElementById("entries");
    var index = Array.from(parent.children).indexOf(this.parentNode);
    parent.removeChild(parent.children[index]);
}

document.getElementById("add").onclick = function(){
    var formData = new FormData(document.querySelector('form'));
    if(!isValid()){
        alert("Wprowadzono niepoprawne dane");
        return;
    }
        
    var name = formData.get("name");
    var phone = formData.get("phone");
    var entry = constructEntry(name, phone);

    document.getElementById("entries").appendChild(entry);
}