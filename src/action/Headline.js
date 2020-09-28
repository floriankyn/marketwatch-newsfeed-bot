//Headline.js//
const discord = require("discord.js")
const axios = require('axios');
const cheerio = require('cheerio');

class Headline{
    constructor(message, config, language, client) {
        this.message = message;
        this.args = message.content.slice().split(/ /);
        this.prefix = config.discord.prefix;
        this.channel = "729554321578131556";
    }
    command() {
        if(this.message.channel.type !== "dm") {
            if(this.args[0] === this.prefix + "show") {
                let data = [];

                setInterval(() => {
                    let url = "https://www.marketwatch.com/latest-news?mod=top_nav";
                    axios.get(url).then(response => {
                        getData(response.data);
                    }).catch(console.error);
                }, 5000)

                let getData = html => {
                    const $ = cheerio.load(html);
                    let headLine = $("html body div div div div div div.element.element--article div.article__content h3.article__headline a.link");
                    let linkToHeadline = headLine.first().attr("href");
                    let headlineFormatted = headLine.first().text()

                    if(typeof data[0] === "undefined") {
                        data.push(headlineFormatted);
                        let channel = this.message.guild.channels.cache.find(channel => channel.id === this.channel);
                        channel.send(this.embed(`[${headlineFormatted}](${linkToHeadline})`)).then().catch(console.error);
                    } else if(!data.includes(headlineFormatted)) {
                        data.push(headlineFormatted);
                        let channel = this.message.guild.channels.cache.find(channel => channel.id === this.channel);
                        channel.send(this.embed(`[${headlineFormatted}](${linkToHeadline})`)).then().catch(console.error);
                    }
                }
            }
        }
    }
    embed(data) {
        return new discord.MessageEmbed()
            .setDescription(data)
            .setColor("GREEN")
    }
}
module.exports = {
    Headline
}
