const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: `10 - 14`,
        value: "888344403347906591",
        emoji: "🇦"
        },
    {

        label: `15 - 16`,
        value: "888344913526276137",
        emoji: "🇧"
    },
    {

        label: `17 - 18`,
        value: "888344964436750336",
        emoji: "🇨"
    },
    {

        label: `19 - 20`,
        value: "888345078916071445",
        emoji: "🇩"
    },
    {

        label: `21 - 22`,
        value: "888345175246659604",
        emoji: "🇪"
    },
    {

        label: `23 - 24`,
        value: "888345244767223828",
        emoji: "🇫"
    },
    {

        label: "25",
        value: "888345326270967819",
        emoji: "🇬"
    },
    {

        label: "25+",
        value: "888345352854466560",
        emoji: "🇭"
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

    return message.channel.send({content: "**Aşağıdaki rollerden kendinize uygun yaş aralığı seçebilirsiniz**", components: [Row] });

}

module.exports.help = {
    name: "dropdown4",
    category: "general",
    description: "Anket"
}