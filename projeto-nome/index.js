function onChangeName() {
    toggleButtonDisable();
    toggleNameErrors();
    greetUser();
}

function toggleNameErrors() {
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById("name-required-error").style.display = "block";
    } 

}

function toggleButtonDisable() {
    const nameValid = isNameValid();
    document.getElementById("salvar-button").disabled = !nameValid;
}

function isNameValid() {
    const name = document.getElementById("name").value;
    if (!name) {
        return false;
    }
    return true;
}

function validadeName(name) {
    return /\S+@\S+\.\S+/.test(name);
}

function greetUser() {
    const name = document.getElementById("name").value;
    if (!name) {
        return (
            alert("Preencha seu nome")
        )
    } else  {
        return (
        alert("Hello, " + name + ", salve seu nome, por favor!")
    )  
    }
      
}

function messageName() {
    const name = document.getElementById("name").value;
    return (
        alert( name + ", obrigado por salvar seu nome!")
    )    
}