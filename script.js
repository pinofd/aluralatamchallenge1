

var btnEncriptar = document.querySelector("#btn-encriptar");



btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value; 
    var msgEncriptado = document.querySelector("#msg");
    var btnCopiar = document.querySelector("#btn-copy");
    btnCopiar.classList.remove("btn-copiar");
  
  var codificado = encriptacion(texto);
  msgEncriptado.value = codificado;
});




 var btnDesencriptar= document.querySelector("#btn-desencriptar");

 
    btnDesencriptar.addEventListener("click",function(e){
        e.preventDefault();

        var title=document.querySelector("#title");
        title.innerHTML="Mensaje desencriptado";
        var textoParaDecodificar = document.querySelector("#input-texto").value;
        
        var decodificado= desencriptacion(textoParaDecodificar);
        var desencriptado = document.querySelector("#msg");
        desencriptado.value = decodificado;
    }) 

var btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click",function(){
    let texto = document.querySelector("#msg");
    texto.select();
    document.execCommand("copy");
})


 