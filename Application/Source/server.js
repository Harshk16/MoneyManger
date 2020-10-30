const express = require("express");
const winston = require("winston");
const app = express();

require("./RestApi.Domain/Logger/log")();
require("./RestApi.Web.Startup/routes/routes")(app);
require("./RestApi.Domain/Database/db")();

const port = process.env.PORT || 5000;

app.listen(port, () => winston.info(`server running on port ${port}`));

app.response.write("It's alive!");

// const dboperation = require('./dboperation');
// var order = require('./order');


// dboperation.getUser().then(result => {
//     console.log(result);
// })
const sql = require('mssql');

const config = {
	user: 'dbadmin',
	password: 'NkW03T7&C&YLkvjlK7EQ',
	server: 'money-manager-db.database.windows.net',
	database: 'money-manager'
}

function test() {
	try {
		sql.connect(config).then(pool => {
			pool.request()
				// .input('input_parameter', sql.Int, value)
				.query('select * from Persons').then(res => {
					console.dir(res)

				})
		})



		// Stored procedure

		// let result2 = await pool.request()
		//     .input('input_parameter', sql.Int, value)
		//     .output('output_parameter', sql.VarChar(50))
		//     .execute('procedure_name')

		// console.dir(result2)
	} catch (err) {
		// ... error checks
	}
}

sql.on('error', err => {
	// ... error handler
})

test();

