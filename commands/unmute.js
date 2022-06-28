
module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has('944695901031657593')) /*mute yetkili rol */ return message.reply("Mute atmak için yetkin yok.")

    if(!args[0]) return message.reply("Bir kişiyi etiket atman gerekiyor.");

    var muteUser = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);

    if(!muteUser) return message.reply("kullanını bulunamıyor");

    let muteRole = message.guild.roles.cache.get("890272416582996088"); // muted rol

    if(!muteRole) return message.channel.send("Muted rol ayarlanmamış, lütfen ayarlayınız.");

    if (muteUser.roles.cache.some(role => role.name === "muted")) {
        message.channel.send("Bu kişi de zaten muted rolü yok");
    }   else {
            muteUser.roles.remove(muteRole.id)
            message.channel.send(`${muteUser} susturulma bitti, hadi geçmiş olsun :)`)

        }


}

module.exports.help = {
name: "unmute",
category: "general",
description: "Mute rolu geri almak"
}