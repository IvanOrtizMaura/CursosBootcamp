
// Verifico el Usuario
function verificacionUsuario() {
  let inputUsuario=document.getElementById("user").value;
  // let inputUsuario = "Ivantiz45"
  console.log(inputUsuario);
  crearConexion().conexion.query(
    `select  nombreUsuario from usuarios where nombreUsuario = '${inputUsuario}'`,
    (err, result) => {
      if (err) console.log(err);
      location.href = "LoginContrasena.html";
    }
  );
}
// verifico la contraseña
function verificacionContrasena() {
  let contrasena = document.getElementById("contraseña").value;

  if (contrasena == "1234") {
    location.href = "home.html";
  } else {
    alert("Contraseña incorrecto");
    console.log(contrasena);
  }
}
