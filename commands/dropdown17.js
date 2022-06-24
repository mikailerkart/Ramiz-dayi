const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Çekiliş Katılımcısı",
        value: "989518854227128390",
        emoji: "989954760142651472"
    },
    {

        label: "Film",
        value: "989518883696304128",
        emoji: "989954792619114516"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(2)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki etkinlik rollerden kendinize uygun rolünüzü alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown17",
    category: "general",
    description: "Anket"
}