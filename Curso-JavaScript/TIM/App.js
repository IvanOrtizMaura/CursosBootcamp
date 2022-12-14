// Creo la conexion
let mysql = require("mysql2");
let conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tim",
});
// Compruebo la cocexion
conexion.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Conexion establecida");
  }
});

function verificacionUsuario() {
  var inputUsuario=document.getElementById("user").value;

  conexion.query(`select  nombreUser from usuarios where nombreUser = '${inputUsuario}'`,(err, result)=>{
    if(err) console.log(err);
    location.href = "LoginContrasena.html";
    
  })
}

function verificacionContrasena(){
  let contrasena = document.getElementById("contraseña").value;

  if(contrasena == "1234"){
    location.href = "home.html"
  }else{
    alert("Contraseña incorrecto")
    console.log(contrasena)
  }
}


