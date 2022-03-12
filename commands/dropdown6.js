const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Türk",
        value: "889585808397467709",
        emoji: "🇹🇷"
        },
    {

        label: `Alien`,
        value: "889585820779044896",
        emoji: "👽"
    },
    {

        label: `Kız/She`,
        value: "887738172371525663",
        emoji: "🚺"
    },
    {

        label: `Erkek/He`,
        value: "887738471857418240",
        emoji: "🚹"
    },
    {

        label: `Ögrenci/Student`,
        value: "887739414711791626",
        emoji: "🤍"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(1)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: `**Aşağıdaki rollerden kendinize uygun rol alabilirsiniz.**
*You can take a suitable role for yourself from the following roles.*`, components: [Row] });

}

module.exports.help = {
    name: "dropdown6",
    category: "general",
    description: "Anket"
}