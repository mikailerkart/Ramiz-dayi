const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('942851209725870081')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "İşletme",
        value: "943157047338369105",
        emoji: "👔"
    },
    {

        label: "İstatistik",
        value: "943157129647366234",
        emoji: "📊"
    },
    {

        label: "Kimya",
        value: "943157154431508570",
        emoji: "⚗️"
    },
    {

        label: "Lojistik",
        value: "943157180075483167",
        emoji: "👷"
    },
    {

        label: "Matematik",
        value: "943157180075483167",
        emoji: "🧮"
    },
    {

        label: "Medya ve iletişim",
        value: "943157180075483167",
        emoji: "📱"
    },
    {

        label: "Muhasebe",
        value: "943157180075483167",
        emoji: "📒"
    },
    {

        label: "Tercümanlık",
        value: "943157180075483167",
        emoji: "🗽"
    },
    {

        label: "Pilot",
        value: "943157180075483167",
        emoji: "🧑‍✈️"
    },
    {

        label: "Psikoloji",
        value: "943157180075483167",
        emoji: "⚙️"
    },
    {

        label: `Radyo, televizyon ve sinema`,
        value: "943157180075483167",
        emoji: "📺"
    },
    {

        label: "Sigortacılık",
        value: "943157180075483167",
        emoji: "⭕"
    },
    {

        label: `Siyaset Bilimi`,
        value: "943157180075483167",
        emoji: "👮"
    },
    {

        label: "Sosyoloji",
        value: "943157180075483167",
        emoji: "👩‍👩‍👧‍👦"
    },
    {

        label: "Tıp",
        value: "943157180075483167",
        emoji: "🏥"
    },
    {

        label: "Turizm",
        value: "943157180075483167",
        emoji: "🗺️"
    },
    {

        label: `Çalışma Ekonomisi`,
        value: "943157180075483167",
        emoji: "🧩"
    },
    {

        label: `Süt Teknolojisi`,
        value: "943157180075483167",
        emoji: "🥛"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(18)
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