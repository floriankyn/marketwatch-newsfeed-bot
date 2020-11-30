# [Marketwatch](https://www.marketwatch.com/) Newsfeed Discord Bot
A discord newsfeed bot, built on top of <a href="https://discord.js.org">discord.js</a>.
<img src="http://www.google.com.au/images/nav_logo7.png">
## Features
 Send in a predefined channel all the latest headlines from marketwatch
 ## System
 Web scraping based, this bot will load each X time the web page and get the latest result. If the result is new and not the same as before, the bot will send a message in the definied channel, else it will do nothing. Each Headline is store in an object to make sure the bot dosen't fetch the same data again and again. 
## Installation
This bot runs on [node.js](https://nodejs.org). You will need at least node 12.
## General
Install [node 12 or newer]((https://nodejs.org/en/download/)),

Run `npm install` in the bot directory and make sure it passes.

Now set up your `config.json` and run `npm start` or `node index.js` in `./src` to test the bot out!

You'll need to replace:
`src/config/config.json` --> discord client token
`src/config/config.json` --> discord client prefix
`src/config/config.json` --> discord feed channel id
## Windows

1. Install [node.js](https://nodejs.org/en/download/)
2. Run `npm install` and make sure it succeeds
3. Set up your `config.json`
4. Run `npm start` or `node index.js` in `./src`  to test the bot out!

### Additional Resources

* [Installing Node on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [npm errors on Windows](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm)
* [Visual Studio Community 2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)

## Setting up
Before the first run you will need to modify the `config.json` in `./src`. A bot token is required. These will be the required value to change.

`src/config/config.json` --> discord client token
`src/config/config.json` --> discord client prefix
`src/config/config.json` --> discord feed channel id

[Please see this excellent guide for how to create your discord bot's account and get your bot token.](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

Verify that the bot runs with your config by running `npm start`.

## Running longterm
Once you've setup your keys and checked that the features you want are working, you have a couple of options for running the bot.

## Selfhosted
You could run the bot along side everything else on your pc. However it's probably a good idea to run your bot on a separate computer such as a linux server or a Raspberry Pi so it does not interfere with your normal operations and to keep it running even if you were to sleep or shutdown your PC. 

## Cloud Hosted
There is a number of cloud hosting providers that can run small node.js applications like this. The following have been tested to work, you'll have to extrapolate if you want to use some other provider (AWS, etc)

### Running on Heroku
- Create heroku account, install heroku-cli, create a new Dyno.
- Git clone the repo and follow the instructions in the Deploy section to setup pushing to heroku
- Go to settings and setup Config Vars the name of the vars are exactly the same as the config.json file. You **DO NOT** need the quotes around the values in config vars
- Run `heroku scale worker=1` in the bot installation directory to run the bot as a worker rather than a webserver.
- SOME COMMANDS ARE NOT WORKING, I AM WORKING TO FIX THIS.

## Help
Please check the GitHub issues page on this project. We get a lot of similar questions, and it is likely that yours has already been answered. 

If you still need help, feel free to join us on [Discord](https://discord.gg/VAQskuac9T).

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.