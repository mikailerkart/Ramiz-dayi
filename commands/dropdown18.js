const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Public",
        value: "1021509289078165524",
        emoji: "👬"
    },
    {

        label: "Study",
        value: "1021509502274633858",
        emoji: "👨‍🏫"
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

    return message.channel.send({content: "**Aşağıdaki anket kısmından kendinize rolünüzü alabilirisiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown18",
    category: "general",
    description: "Anket"
}