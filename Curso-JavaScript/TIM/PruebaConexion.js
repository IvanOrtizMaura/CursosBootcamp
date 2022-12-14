let mysql = require("mysql2");
let conexion = mysql.createConnection({
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
prueba()
function prueba(){
    let user = "ivantiz45"
    conexion.query(`select  nombreUser from usuarios where nombreUser = '${user}'`, (err, result) => {
      if (err) console.log(err);
      let usuario = result[0].nombreUser;
      console.log(usuario);
    });
}

