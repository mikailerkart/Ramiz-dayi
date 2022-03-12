const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
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

    return message.channel.send({components: [Row] });

}

module.exports.help = {
    name: "dropdown8",
    category: "general",
    description: "Anket"
}