const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Koç",
        value: "989517246349066260",
        emoji: "♈"
    },
    {

        label: "Boğa",
        value: "989517264191647774",
        emoji: "♉"
    },
    {
        label: "İkizler",
        value: "989517287889440798",
        emoji: "♊"
    },
    {
        label: "Yengeç",
        value: "989517317178281994",
        emoji: "♋"
    },
    {
        label: "Aslan",
        value: "989517352221696021",
        emoji: "♌"
    },
    {
        label: "Başak",
        value: "989517372136235008",
        emoji: "♍"
    },
    {
        label: "Akrep",
        value: "989517409260032090",
        emoji: "♏"
    },
    {
        label: "Terazi",
        value: "989517390427590706",
        emoji: "♎"
    },
    {
        label: "Yay",
        value: "989517428880965643",
        emoji: "♐"
    },
    {
        label: "Oğlak",
        value: "989517453040177183",
        emoji: "♑"
    },
    {
        label: "Kova",
        value: "989517466994634804",
        emoji: "♒"
    },
    {
        label: "Balık",
        value: "989517507754885161",
        emoji: "♓"
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

    return message.channel.send({content: "**Aşağıdaki burç rollerden kendi burç rolünüzü alabilirsin.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown14",
    category: "general",
    description: "Anket"
}