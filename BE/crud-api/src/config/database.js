import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'logistic',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});

export default db;
