const express = require('express')
const app = express()
const port = 3000;

app.listen(port,()=>{
    console.log(`Exemple app listening on port ${port}`)
})

let mysql2 = require('mysql2');
let conexion = mysql2.createConnection({
    host: 'localhost',
    user:  'root',
    password: '1v4nG00n3r45',
    database:'tim'
})
conexion.connect(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Conexion establecida");
    }
  });
let nombreUsuario = 'Ivantiz45'

conexion.query(`select nombreUsuario from tim.usuarios where nombreUsuario = '${nombreUsuario}'`, function(err,rows,fields){
    if(err) throw err;
    app.get('/',(req, res)=>{
        res.send(rows[0].nombreUsuario)
    })
    console.log(rows[0].nombreUsuario)
})


