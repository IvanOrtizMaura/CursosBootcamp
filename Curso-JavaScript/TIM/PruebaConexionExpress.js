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
  password: "root",
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

function validarUsuario(inputUsuario) {
  let query = `select nombreUser from usuarios where nombreUser = '${inputUsuario}'`;
  conexion.query(query, function (req, res, fields) {
    if (err) throw err;
    let usuario = res[0].nombreUser;
    if (usuario == inputUsuario) {
      app.get("/loginContrasena", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./Public/LoginContrasena.html"));
      });
    } else {
      alert("Error al introducir el usuario");
    }
  });
}

const eventListener = (input, funcion) => {
  input.addEventListener("keyup", funcion);
  input.addEventListener("blur", funcion);
};

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

