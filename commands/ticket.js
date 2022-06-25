const discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {

    if (message.channel.id === '967460038157418607') /* ticket kurma chat */  {

    const categoryID = "988827487591096380"; // ticket category

    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;

    var reason = args.join(" ");
    if (!reason) return message.reply(`Lütfen nedeni belirtin.`);

    var ticketBestaat = false;

    message.guild.channels.cache.forEach((channel) => {

        if (channel.name === userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send(`Zaten bir ticket oluşturdunuz`)

            ticketBestaat = true;

            return;

        }

    });

    if (ticketBestaat) return;

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: "text" }).then((createdChan) => {

        createdChan.setParent(categoryID).then((settedParent) => {

            // Perms zodat iedereen niets kan lezen.
            settedParent.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === "@everyone"), {

                SEND_MESSAGES: false,
                VIEW_CHANNEL: false

            });

            settedParent.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === "Üye"), {

                SEND_MESSAGES: false,
                VIEW_CHANNEL: false

            });

            settedParent.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === "Student"), {

                SEND_MESSAGES: false,
                VIEW_CHANNEL: false

            });

            // READ_MESSAGE_HISTORY Was vroeger READ_MESSAGES
            // Perms zodat de gebruiker die het command heeft getypt alles kan zien van zijn ticket.
            settedParent.permissionOverwrites.edit(message.author.id, {
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGE_HISTORY: true,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true
            });

            // Perms zodat de gebruikers die admin zijn alles kunnen zien van zijn ticket.
            settedParent.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === "Owner"), { // yetki ismi
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGE_HISTORY: true,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true
            });

            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0'); // Nul toevoegen als het bv. 1 is -> 01
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = `${dd}/${mm}/${yyyy}`;

            let embedParent = new discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ size: 4096}))
                .setTitle('New ticket')
                .addFields(
                    {name: "Reason:", value: reason, inline: true},
                    {name: `Created at:`, value: today, inline: true}
                );

                message.channel.send(`✅ Ticket created.`);

                settedParent.send({embeds: [embedParent] });

        }).catch(err => {
            message.channel.send(`❌ Bir şeyler yanlış gitti`);

        })

    }).catch(err => {
        message.channel.send(`❌ Bir şeyler yanlış gitti`);

    });

}else { message.channel.send("Lütfen bu komutu ticket kurma kanalında yapın.")

}}

module.exports.help = {
    name: "ticket",
    category: "general",
    description: "ticket yapar"
}