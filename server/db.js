//db.js helps us connect to the database
const Pool = require("pg").Pool;

const Pool = new Pool({
    user: "postgres",
    password: "postgres123",
    host: "localhost",
    port: "5432", 
    database: "perntodo"
});

module.exports = pool;