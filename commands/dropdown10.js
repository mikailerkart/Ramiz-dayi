const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak iรงin yetkin yok.");

    const options = [
    {

        label: "Business",
        value: "887339244304105512",
        emoji: "๐"
    },
    {

        label: "Statistics",
        value: "887339257415495723",
        emoji: "๐"
    },
    {

        label: "Chemical",
        value: "887339273643241616",
        emoji: "โ๏ธ"
    },
    {

        label: "Logistics",
        value: "887339289279602779",
        emoji: "๐ท"
    },
    {

        label: "Mathematics",
        value: "887339307197673532",
        emoji: "๐งฎ"
    },
    {

        label: `Media and communication`,
        value: "887339331981803531",
        emoji: "๐ฑ"
    },
    {

        label: "Accounting",
        value: "887339346796113961",
        emoji: "๐"
    },
    {

        label: "Interpretership",
        value: "887339360729575426",
        emoji: "๐ฝ"
    },
    {

        label: "Pilot",
        value: "887339384721010718",
        emoji: "๐งโโ๏ธ"
    },
    {

        label: "Psychology",
        value: "887339397672992868",
        emoji: "โ๏ธ"
    },
    {

        label: `Radio, television and cinema`,
        value: "887339410356580362",
        emoji: "๐บ"
    },
    {

        label: "Insurances",
        value: "887339424680120341",
        emoji: "โญ"
    },
    {

        label: `Political Science`,
        value: "887339443369939015",
        emoji: "๐ฎ"
    },
    {

        label: "Sociology",
        value: "887339455898333214",
        emoji: "๐ฉโ๐ฉโ๐งโ๐ฆ"
    },
    {

        label: "Medicine",
        value: "887339481219362816",
        emoji: "๐ฅ"
    },
    {

        label: "Tourism",
        value: "887339504795537439",
        emoji: "๐บ๏ธ"
    }


    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(16)
        .setPlaceholder("Choose a role.")
        .addOptions(options)
    )

    return message.channel.send({components: [Row] });

}

module.exports.help = {
    name: "dropdown10",
    category: "general",
    description: "Anket"
}