const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setAuthor("Ramiz dayi", 'https://i.imgur.com/C0rnWy1.png')
        .setColor("#0099FF")
        .addFields(
            {name: "Version", value: "1.0.2"},
            {name: "Creator", value: "Løne Wølf ⌁#9897"},
            {name: "Underworld", value: 'discord.gg/SNXdvsstGR'},
            {name: "Revival", value: 'discord.gg/pAvTDAtbpB'} 
        )
        .setTimestamp();

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "Bot bilgilerini açar"
}