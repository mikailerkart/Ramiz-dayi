const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Türk",
        value: "887052314064584775",
        emoji: "🇹🇷"
        },
    {

        label: `Alien`,
        value: "887052613722452038",
        emoji: "👽"
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