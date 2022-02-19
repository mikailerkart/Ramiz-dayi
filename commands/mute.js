const ms = require ("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has('944695901031657593')) /*mute yetkili rol */ return message.reply("Mute atmak için yetkin yok.")

    if(!args[0]) return message.reply("Bir kişiyi etiket atman gerekiyor.");

    if(!args[1]) return message.reply("Bir sebep berirtmen gerekiyor.")

    var muteUser = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);

    var reason = args.slice(1).join(" ");

    if(!muteUser) return message.reply("kullanci bulunamiyor");

    let muteRole = message.guild.roles.cache.get("839462016812580874"); // muted role

    if(!muteRole) return message.channel.send("Muted rol ayarlanmamis, lütfen ayarlayiniz.");

    var muteTime = args[2];

    if(!muteTime) return message.channel.send("Kaç saat, kaç dk, kaç saniye? Lütfen belirtiniz.");

    if (muteUser.roles.cache.some(role => role.name === "muted")) {
        message.channel.send("Bu kişi zaten susturuldu");
    }   else {
            muteUser.roles.add(muteRole.id)
            message.channel.send(`${muteUser} susturuldu, sebep: ${reason} bu süre bitene kadar konuşamaz xd`)


             setTimeout(() => {

                muteUser.roles.remove(muteRole.id)
                message.channel.send(`${muteUser} susturulma bitti, hadi geçmiş olsun :)`)

            }, ms(muteTime));
        }


}

module.exports.help = {
name: "mute",
category: "general",
description: "Mute atmak"
}