const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('886602905468158003')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak iΓ§in yetkin yok.");

    const options = [
        {

        label: "Engineering",
        value: "887338664261214239",
        emoji: "π§βπ»"
        },
    {

        label: "Teacher",
        value: "887338823888011264",
        emoji: "π§βπ«"
    },
    {

        label: `Banking and finance`,
        value: "887338883442966588",
        emoji: "π¦"
    },
    {

        label: `Press and publication`,
        value: "887338919497183303",
        emoji: "π°"
    },
    {

        label: "Languages",
        value: "887338941689241632",
        emoji: "π"
    },
    {

        label: "Informatics",
        value: "887338961515720724",
        emoji: "π»"
    },
    {

        label: "History",
        value: "887338976183201823",
        emoji: "π"
    },
    {

        label: "Biology",
        value: "887338994197745695",
        emoji: "π§¬"
    },
    {

        label: "Geography",
        value: "887339001349025853",
        emoji: "π"
    },
    {

        label: "Dentist",
        value: "887339035436138607",
        emoji: "π¦·"
    },
    {

        label: "Doctor",
        value: "887339053249355778",
        emoji: "π¨ββοΈ"
    },
    {

        label: `Economics (and finance)`,
        value: "887339071477796944",
        emoji: "π΅"
    },
    {

        label: "Philosophy",
        value: "887339087051251722",
        emoji: "π§ "
    },
    {

        label: "Physics",
        value: "887339106374398042",
        emoji: "ποΈ"
    },
    {

        label: "Gastronomy",
        value: "887339124942598176",
        emoji: "π§βπ³"
    },
    {

        label: "Journalism",
        value: "887339141413613588",
        emoji: "ποΈ"
    },
    {

        label: "Nursing",
        value: "887339167137292288",
        emoji: "π©ββοΈ"
    },
    {

        label: "Law",
        value: "887339183394422854",
        emoji: "π§ββοΈ"
    },
    {

        label: "Architecture",
        value: "887339204374315021",
        emoji: "π"
    },
    {

        label: "Δ°slam",
        value: "887363945806053386",
        emoji: "βͺοΈ"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(20)
        .setPlaceholder("Choose a role.")
        .addOptions(options)
    )

    return message.channel.send({content: "**You can choose your university courses that you follow from the following roles.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown9",
    category: "general",
    description: "Anket"
}