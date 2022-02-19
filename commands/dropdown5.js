const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Mezun",
        value: "890987737233100820",
        emoji: "🎓"
        },
    {

        label: `12. sınıf`,
        value: "890987764965867521",
        emoji: "🟠"
    },
    {

        label: `11. sınıf`,
        value: "890987761472012358",
        emoji: "🟢"
    },
    {

        label: `10. sınıf`,
        value: "890987758213025832",
        emoji: "🟣"
    },
    {

        label: `9. sınıf`,
        value: "890987753850953739",
        emoji: "🟤"
    },
    {

        label: `Üniversite / Yüksekokul`,
        value: "890987779499122759",
        emoji: "🟥"
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

    return message.channel.send({content: "**Aşağıdaki rollerden kendinize uygun rol alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown5",
    category: "general",
    description: "Anket"
}