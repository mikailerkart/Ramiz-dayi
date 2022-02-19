const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('942851209725870081')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Mühendislik",
        value: "943157047338369105",
        emoji: "🧑‍💻"
        },
    {

        label: "Öğretmenlik",
        value: "943157129647366234",
        emoji: "🧑‍🏫"
    },
    {

        label: `Bankacılık ve Finans`,
        value: "943157154431508570",
        emoji: "🏦"
    },
    {

        label: `Basın ve yayın`,
        value: "943157180075483167",
        emoji: "📰"
    },
    {

        label: "Diller",
        value: "943157180075483167",
        emoji: "🌐"
    },
    {

        label: "Enformatik",
        value: "943157180075483167",
        emoji: "💻"
    },
    {

        label: "Tarih",
        value: "943157180075483167",
        emoji: "📜"
    },
    {

        label: "Biyoloji",
        value: "943157180075483167",
        emoji: "🧬"
    },
    {

        label: "Coğrafya",
        value: "943157180075483167",
        emoji: "🌍"
    },
    {

        label: `Diş hekimliği`,
        value: "943157180075483167",
        emoji: "🦷"
    },
    {

        label: "Doktor",
        value: "943157180075483167",
        emoji: "👨‍⚕️"
    },
    {

        label: `Ekonomi (ve finans)`,
        value: "943157180075483167",
        emoji: "💵"
    },
    {

        label: "Felsefe",
        value: "943157180075483167",
        emoji: "🧠"
    },
    {

        label: "Fizik",
        value: "943157180075483167",
        emoji: "🎚️"
    },
    {

        label: "Gastronomi",
        value: "943157180075483167",
        emoji: "🧑‍🍳"
    },
    {

        label: "Gazetecilik",
        value: "943157180075483167",
        emoji: "🗞️"
    },
    {

        label: "Hemşirelik/Hemşir",
        value: "943157180075483167",
        emoji: "👩‍⚕️"
    },
    {

        label: "Hukuk",
        value: "943157180075483167",
        emoji: "🧑‍⚖️"
    },
    {

        label: "Mimarlık",
        value: "943157180075483167",
        emoji: "📝"
    },
    {

        label: "İslam",
        value: "943157180075483167",
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