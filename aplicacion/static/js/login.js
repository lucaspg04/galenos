function login(){
    var user, pass;

    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
    console.log(username);
    console.log(password);

    if(user == "Miguel" && pass == "1234"){

        window.location = "index.html";

    }

    else{
        alert("CONTRASEÑA O USUARIO INCORRECTO");
    }
}

