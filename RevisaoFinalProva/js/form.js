function imprimir(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var motContato = document.getElementById("mContato").value;
    var message = document.getElementById("message").value;

    if( name && email && motContato && message){
        alert("Nome: " + name + " " + "\nEmail: " + email + " " + "\nMotivo de Contato " + motContato + " " + "\nMensagem " + message);
    }else{
        alert("Preencha todos os campos");
    }
}