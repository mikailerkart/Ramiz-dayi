const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('942851209725870081')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: `10 - 14`,
        value: "943157047338369105",
        emoji: "🇦"
        },
    {

        label: `15 - 16`,
        value: "943157129647366234",
        emoji: "🇧"
    },
    {

        label: `17 - 18`,
        value: "943157154431508570",
        emoji: "🇨"
    },
    {

        label: `19 - 20`,
        value: "943157180075483167",
        emoji: "🇩"
    },
    {

        label: `21 - 22`,
        value: "943157180075483167",
        emoji: "🇪"
    },
    {

        label: `23 - 24`,
        value: "943157180075483167",
        emoji: "🇫"
    },
    {

        label: "25",
        value: "943157180075483167",
        emoji: "🇬"
    },
    {

        label: "25+",
        value: "943157180075483167",
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