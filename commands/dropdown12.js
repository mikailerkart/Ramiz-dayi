const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: `12th grade`,
        value: "953239677597548545",
        emoji: "🟠"
    },
    {

        label: `11th grade`,
        value: "953239713962156064",
        emoji: "🟢"
    },
    {

        label: `10th grade`,
        value: "953239797353283635",
        emoji: "🟣"
    },
    {

        label: `9th grade`,
        value: "953239929830383616",
        emoji: "🟤"
    },
    {

        label: "Bachelor",
        value: "953236956303753236",
        emoji: "🟨"
    },
    {

        label: "Master",
        value: "953237026809983016",
        emoji: "🟧"
    },
    {

        label: "PHD",
        value: "953237279898468372",
        emoji: "🟥"
    },
    {

        label: "Alumnus",
        value: "953237295308374066",
        emoji: "🟩"
    }
    
    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(4)
        .setPlaceholder("Choose a role.")
        .addOptions(options)
    )

    return message.channel.send({content: "**You can take a role that suits you from the following roles.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown12",
    category: "general",
    description: "Anket"
}