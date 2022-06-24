const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Tabu",
        value: "989518378328817694",
        emoji: "989952746918666340"
    },
    {

        label: "Lol",
        value: "989518402169229352",
        emoji: "989952978100322365"
    },
    {
        label: "Valorant",
        value: "989518436457664513",
        emoji: "989953019254816868"
    },
    {
        label: "Terraria",
        value: "989858978810970202",
        emoji: "989953071025111102"
    },
    {
        label: "Rocket League",
        value: "989518457236242492",
        emoji: "989953206257864815"
    },
    {
        label: "PUBG",
        value: "989518499145719811",
        emoji: "989953259701698700"
    },
    {
        label: "Minecraft",
        value: "989518525246885908",
        emoji: "989953298700316802"
    },
    {
        label: "CSGO",
        value: "989518555190034452",
        emoji: "989953386591977473"
    },
    {
        label: "Gartic.io/phone",
        value: "989518571505860620",
        emoji: "989953442246197288"
    },
    {
        label: "Among us",
        value: "989518599410561034",
        emoji: "989953541110120548"
    },
    {
        label: "Vampir Köylü",
        value: "989518636018466876",
        emoji: "989953592997867571"
    },
    {
        label: "Doğruluk Cesaret",
        value: "989518665881886731",
        emoji: "989953709964394517"
    },
    {
        label: "Zula",
        value: "989518695103623228",
        emoji: "989954456097538058"
    },
    {
        label: "Gta V",
        value: "989518720856629248",
        emoji: "989953752742133852"
    },
    {
        label: "Town of Salem",
        value: "989518746479632465",
        emoji: "989953793133252678"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(15)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki oyun rollerden kendinize oyun rolünüzü alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown16",
    category: "general",
    description: "Anket"
}