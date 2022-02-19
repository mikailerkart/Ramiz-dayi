const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Mühendislik",
        value: "887363174909763624",
        emoji: "🧑‍💻"
        },
    {

        label: "Öğretmenlik",
        value: "887363224465449033",
        emoji: "🧑‍🏫"
    },
    {

        label: `Bankacılık ve Finans`,
        value: "887363240806465556",
        emoji: "🏦"
    },
    {

        label: `Basın ve yayın`,
        value: "887363288676057118",
        emoji: "📰"
    },
    {

        label: "Diller",
        value: "887363382393573376",
        emoji: "🌐"
    },
    {

        label: "Enformatik",
        value: "887363410776453130",
        emoji: "💻"
    },
    {

        label: "Tarih",
        value: "887363439935238216",
        emoji: "📜"
    },
    {

        label: "Biyoloji",
        value: "887363465893789716",
        emoji: "🧬"
    },
    {

        label: "Coğrafya",
        value: "887363483111411722",
        emoji: "🌍"
    },
    {

        label: `Diş hekimliği`,
        value: "887363510865129513",
        emoji: "🦷"
    },
    {

        label: "Doktor",
        value: "887363786548338758",
        emoji: "👨‍⚕️"
    },
    {

        label: `Ekonomi (ve finans)`,
        value: "887363810430693406",
        emoji: "💵"
    },
    {

        label: "Felsefe",
        value: "887363831607726102",
        emoji: "🧠"
    },
    {

        label: "Fizik",
        value: "887363856366698536",
        emoji: "🎚️"
    },
    {

        label: "Gastronomi",
        value: "887363870375677952",
        emoji: "🧑‍🍳"
    },
    {

        label: "Gazetecilik",
        value: "887363884317548596",
        emoji: "🗞️"
    },
    {

        label: "Hemşir(e)",
        value: "887363898653691915",
        emoji: "👩‍⚕️"
    },
    {

        label: "Hukuk",
        value: "887363913728024596",
        emoji: "🧑‍⚖️"
    },
    {

        label: "Mimarlık",
        value: "887363928508735499",
        emoji: "📝"
    },
    {

        label: "İslam",
        value: "887363945806053386",
        emoji: "☪️"
    },

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(20)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki üniversite bölümlerden rol alabilirsin.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown2",
    category: "general",
    description: "Anket"
}