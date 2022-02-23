const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "İşletme",
        value: "887363968966983750",
        emoji: "👔"
    },
    {

        label: "İstatistik",
        value: "887363998696222740",
        emoji: "📊"
    },
    {

        label: "Kimya",
        value: "887364095953764362",
        emoji: "⚗️"
    },
    {

        label: "Lojistik",
        value: "887364220797214761",
        emoji: "👷"
    },
    {

        label: "Matematik",
        value: "887364266951335966",
        emoji: "🧮"
    },
    {

        label: `Medya ve iletişim`,
        value: "887364297372610641",
        emoji: "📱"
    },
    {

        label: "Muhasebe",
        value: "887364304205148160",
        emoji: "📒"
    },
    {

        label: "Tercümanlık",
        value: "887364316997771274",
        emoji: "🗽"
    },
    {

        label: "Pilot",
        value: "887364335087800330",
        emoji: "🧑‍✈️"
    },
    {

        label: "Psikoloji",
        value: "887364365286789140",
        emoji: "⚙️"
    },
    {

        label: `Radyo, televizyon ve sinema`,
        value: "887364389190123590",
        emoji: "📺"
    },
    {

        label: "Sigortacılık",
        value: "887364412401418250",
        emoji: "⭕"
    },
    {

        label: `Siyaset Bilimi`,
        value: "887364434882887711",
        emoji: "👮"
    },
    {

        label: "Sosyoloji",
        value: "887364453446877194",
        emoji: "👩‍👩‍👧‍👦"
    },
    {

        label: "Tıp",
        value: "887364471234899969",
        emoji: "🏥"
    },
    {

        label: "Turizm",
        value: "887364483503251506",
        emoji: "🗺️"
    },
    {

        label: `Çalışma Ekonomisi`,
        value: "891064697267310592",
        emoji: "🧩"
    },
    {

        label: `Süt Teknolojisi`,
        value: "891066856734093373",
        emoji: "🥛"
    },
    {

        label: `Elektronörofizyoloji`,
        value: "946121635843436704",
        emoji: "🧠"
    },
    {
        label: `Uluslararası Ticaret`,
        value: "946129349885718628",
        emoji: "💰"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(19)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({components: [Row] });

}

module.exports.help = {
    name: "dropdown3",
    category: "general",
    description: "Anket"
}