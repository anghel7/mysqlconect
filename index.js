var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysqltest'
});

conexion.connect();

conexion.query('SELECT * FROM alumno', 
function (error, resultados, campos) {
  if(error){
    console.log('Error al ejecutar la consulta', error);
    return;
  }else{
    console.log('Lista de alumnos: ', resultados);
  }
});

conexion.end();