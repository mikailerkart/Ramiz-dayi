const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Single",
        value: "989518770651430923",
        emoji: "969207642205593620"
    },
    {

        label: "Lovers",
        value: "989518797624967178",
        emoji: "989954502293598299"
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

    return message.channel.send({content: "**Aşağıdaki ilişki rollerden kendinize uygun rolünüzü alabilirsin.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown15",
    category: "general",
    description: "Anket"
}