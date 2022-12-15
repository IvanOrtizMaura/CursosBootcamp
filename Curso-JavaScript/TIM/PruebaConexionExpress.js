const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`);
});

let mysql2 = require("mysql2");
let conexion = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1v4nG00n3r45",
  database: "tim",
});
conexion.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Conexion establecida");
  }
});

app.use(express.static("Public"));

app.use(express.static("JavaScript"));

const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Public/Login.html"));
});



app.post("/login", (req, res) => {
  

});

function validarUsuario(inputUsuario) {
  let query = `select nombreUsuario from usuarios where nombreUsuario = '${inputUsuario}'`;
  conexion.query(query, function (req, res, fields) {
    if (req) throw req;
    let usuario = res[0].nombreUsuario;
    if (usuario == inputUsuario) {
      // app.get("/loginContrasena", (req, res) => {
      //   res.sendFile(path.resolve(__dirname, "./Public/LoginContrasena.html"));
      // });
      console.log(usuario);
    } else {
      alert("Error al introducir el usuario");
    }
  });
}

// // Verifico el Usuario
// function verificacionUsuario() {
//   let inputUsuario=document.getElementById("user").value;
//   // let inputUsuario = "Ivantiz45"
//   console.log(inputUsuario);
//   crearConexion().conexion.query(
//     `select  nombreUsuario from usuarios where nombreUsuario = '${inputUsuario}'`,
//     (err, result) => {
//       if (err) console.log(err);
//       location.href = "LoginContrasena.html";
//     }
//   );
// }
// // verifico la contraseña
// function verificacionContrasena() {
//   let contrasena = document.getElementById("contraseña").value;

//   if (contrasena == "1234") {
//     location.href = "home.html";
//   } else {
//     alert("Contraseña incorrecto");
//     console.log(contrasena);
//   }
// }
