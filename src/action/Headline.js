//Headline.js//
const discord = require("discord.js")
const axios = require('axios');
const cheerio = require('cheerio');

class Headline{
    constructor( config, language, client) {
        this.prefix = config.discord.prefix;
        this.channelId = config.discord.channel_id;
        this.channel = client.channels.cache.get(this.channelId);
    }
    on() {
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
                this.channel.send(this.embed(`[${headlineFormatted}](${linkToHeadline})`)).then().catch(console.error);
            } else if(!data.includes(headlineFormatted)) {
                data.push(headlineFormatted);
                this.channel.send(this.embed(`[${headlineFormatted}](${linkToHeadline})`)).then().catch(console.error);
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
