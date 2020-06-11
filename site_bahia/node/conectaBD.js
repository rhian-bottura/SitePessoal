const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rhian',
    password : '123456',
    database : 'SitePi'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;