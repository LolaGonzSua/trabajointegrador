function calcular(){
var name = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var mail = document.getElementById('mail')
var cantidad = document.getElementById('cantidad')
var categoria = document.getElementById('categoria')

if(/^(?!.* $)[A-Z][a-z ]+$/.test(nombre.value)) {
    nombre.classList.remove ("is-invalid");

}
 else if(nombre.value==="") {
 nombre.classList.add("is-invalid");
 nombre.focus() 

 }










}
