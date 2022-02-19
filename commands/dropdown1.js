const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('942851209725870081')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Eşit Ağırlık",
        value: "943157047338369105",
        emoji: "⚖️"
        },
    {

        label: "Sayısal",
        value: "943157129647366234",
        emoji: "🔢"
    },
    {

        label: "Sözel",
        value: "943157154431508570",
        emoji: "📚"
    },
    {

        label: "Dil",
        value: "943157180075483167",
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