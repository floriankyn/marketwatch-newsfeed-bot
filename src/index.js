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

// Commands imports (Located to ./action/)
const {Headline} = require("./action/Headline.js");

// Client event
client.on('ready', () => {
    console.log(`[${time(Date.now())}] The client "${client.user.tag} has been connected."`); // check if the client has been logged.
});
client.on(`message`, (message) => {
    new Headline(message, config, language, client).command();
});

// Login to Discord Api
client.login(config.discord.token);
