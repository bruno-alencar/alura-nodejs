var mysql = require('mysql');

function createDBConnection(){
	if(!process.env.NODE_ENV){

		return mysql.createConnection({
				host : 'localhost',
				user : 'root',
				password : 'root',
				database : 'casadocodigo_nodejs'
			});
	}

	if(process.env.NODE_ENV == 'test'){

		return mysql.createConnection({
				host : 'localhost',
				user : 'root',
				password : 'root',
				database : 'casadocodigo_nodejs_test'
			});

	}

	if(process.env.NODE_ENV == 'production'){

		var urlDeConexao = process.envCLEARDB_DATABASE_URL;
		var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);

		return mysql.createConnection({
				host : 'localhost',
				user : 'root',
				password : 'root',
				database : 'casadocodigo_nodejs_test'
			});

	}
}

//wrapper
module.exports = function(){
	return createDBConnection;
}