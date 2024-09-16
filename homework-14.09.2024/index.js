import {QueryTypes, Sequelize} from 'sequelize';

const sequelize = new Sequelize('my-first-database', 'root', 'root', {
	host: 'localhost',
	dialect: 'mariadb'
});

async function createUser() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
	
	const sql = 'INSERT INTO `users-profile` (`name`, `e-mail`) VALUES (\'Yevhen\', \'Yevhen@gmail.com\')';
	try {
		const result = await sequelize.query(sql, {type: QueryTypes.SELECT});
		console.log(result);
	} catch (error) {
		console.error('Error executing query:', error);
	}
}

async function showUsers() {
    const sql = 'SELECT * FROM `users-profile`';
		try {
			const result = await sequelize.query(sql, { type: QueryTypes.SELECT });
			console.log(result);
		} catch (error) {
			console.error('Error executing query:', error);
	}
}

createUser();
showUsers();