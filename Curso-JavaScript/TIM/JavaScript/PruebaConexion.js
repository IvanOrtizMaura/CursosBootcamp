let mysql = require("mysql2");
let conexion = mysql.createConnection({
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
prueba()
function prueba(){
    let user = "Ivantiz45"
    conexion.query(`select  nombreUsuario from usuarios where nombreUsuario = '${user}'`, (err, result) => {
      if (err) console.log(err);
      let nombreBBDD = result[0].nombreUsuario
      
      
    });
}

