//Database.js//

class Database {
    constructor(token, time=null) {
        this.dbUsername = token.database.username;
        this.dbDatabase = token.database.database;
        this.dbPassword = token.database.password;
        this.dbHost = token.database.host;
        this.dbPort = token.database.port;
        this.time = time;
    }
    connection() {
        return mysql.createConnection({
            user: this.dbUsername,
            database: this.dbDatabase,
            password: this.dbPassword,
            host: this.dbHost,
            port: this.dbPort
        });
    }
    checkConnectionState() {
        this.connection.query(`SELECT * FROM ?`, (err) => {
            if(err) {
                return `[${time(Date.now())}] The connection between the client & the Database has failed.`;
            } else {
                return `[${time(Date.now())}] The connection between the client & the Database has been established.`;
            }
        });
    }
}

module.exports = {
    Database
}