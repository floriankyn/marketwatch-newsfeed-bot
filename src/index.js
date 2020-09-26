//index.js//
//node.js imports
const fs = require("fs");
const time = date => `${new Date(date).getHours()}:${new Date(date).getMinutes()}:${new Date(date).getSeconds()}`;

// discord.js init
const discord = require("discord.js");
const client = new discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});

// json imports
const config = JSON.parse(fs.readFileSync("./config/config.json"));
const language = JSON.parse(fs.readFileSync("./language/en-US.json"));

// Database imports (Located to ./database/)
const {Database} = require("./database/Database.js");

// Commands imports (Located to ./action/)


// Api Imports (Located to ./api/)


// Client event
client.on('ready', () => {
    console.log(`[${time(Date.now())}] The client "${client.user.tag} has been connected."`); // check if the client has been logged.
    //console.log(new Database(config).checkConnectionState()); // Return if the client is connected to the database.
});

// Login to Discord Api
client.login(config.discord.token);
