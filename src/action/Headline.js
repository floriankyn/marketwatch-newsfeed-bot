//Headline.js//
const discord = require("discord.js")
const axios = require('axios');
const cheerio = require('cheerio');

class Headline{
    constructor(message, config, language, client) {
        this.message = message;
        this.args = message.content.slice().split(/ /);
        this.prefix = config.discord.prefix;
    }
    command() {
        if(this.message.channel.type !== "dm") {
            if(this.args[0] === this.prefix + "show") {
                let url = "https://www.marketwatch.com/";
                axios.get(url).then(response => {
                    getData(response.data)
                }).catch(console.error);

                let getData = html => {
                    const $ = cheerio.load(html);
                    let headLine = $(".column.column--primary .element.element--article.no-image.is-lead .article__content .article__headline .link");
                    let linkToHeadline = headLine.attr("href");
                    let headlineFormatted = headLine.text().slice(/ /)
                    console.log(headlineFormatted.replace(/\s/g, ' '))

                    this.message.channel.send(this.embed(`[${headlineFormatted.replace(/\s/g, ' ')}](${linkToHeadline})`)).then().catch(console.error);
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
