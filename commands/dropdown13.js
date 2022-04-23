const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: `Güzel sanatlar`,
        value: "958296041021644820",
        emoji: "🎨"
    },
    {

        label: `Animasyon tasarım`,
        value: "958296410921533460",
        emoji: "👨‍💻"
    },
    {

        label: `Fizyoterapi ve rehabilitasyon`,
        value: "958297263258619967",
        emoji: "💀"
    },
    {

        label: "Eczacılık",
        value: "958297618038009866",
        emoji: "💊"
    },
    {
        label: "Dilbilim",
        value: "967472370631716874",
        emoji: "🎤"

    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(5)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({components: [Row] });

}

module.exports.help = {
    name: "dropdown13",
    category: "general",
    description: "Anket"
}