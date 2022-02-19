const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Eşit Ağırlık",
        value: "887052743703949338",
        emoji: "⚖️"
        },
    {

        label: "Sayısal",
        value: "887052861295444028",
        emoji: "🔢"
    },
    {

        label: "Sözel",
        value: "887052899237117982",
        emoji: "📚"
    },
    {

        label: "Dil",
        value: "890284677187919892",
        emoji: "🗣️"
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

    return message.channel.send({content: "**Aşağıdaki lise bölümlerden rol alabilirsin.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown1",
    category: "general",
    description: "Anket"
}