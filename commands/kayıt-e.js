const discord = require("discord.js");
const db = require("nrc.db");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

   let kayit_ytk        = db.fetch(`kayit_yetkili_${message.guild.id}`)
   let kayit_ögrenci    = db.fetch(`kayit_ögrenci_rol_${message.guild.id}`)
   let kayit_erkek      = db.fetch(`kayit_erkek_rol_${message.guild.id}`)
   let kayit_kiz        = db.fetch(`kayit_kiz_rol_${message.guild.id}`)
   let kayit_mezun      = db.fetch(`kayit_mezun_rol_${message.guild.id}`)
   let kayit_12_sinif   = db.fetch(`kayit_12_sinif_rol_${message.guild.id}`)
   let kayit_11_sinif   = db.fetch(`kayit_11_sinif_rol_${message.guild.id}`)
   let kayit_10_sinif   = db.fetch(`kayit_10_sinif_rol_${message.guild.id}`)
   let kayit_9_sinif    = db.fetch(`kayit_9_sinif_rol_${message.guild.id}`)
   let kayit_üniversite = db.fetch(`kayit_üniversite_rol_${message.guild.id}`)
   let kayit_türk       = db.fetch(`kayit_türk_rol_${message.guild.id}`)
   let kayit_alien      = db.fetch(`kayit_alien_rol_${message.guild.id}`)
   let kayitsiz         = db.fetch(`kayit_kayitsiz_rol_${message.guild.id}`)
   let kayit_log        = db.fetch(`kayit_kayit_log_${message.guild.id}`)
   let kayit_kanal      = db.fetch(`kayit_kayit_kanal_${message.guild.id}`)


    if(!kayit_ytk) return message.channel.send(`**Kayit yetkilisi** rolü ayarlanmamiş`)
    if(!message.member.roles.cache.has(kayit_ytk)) return message.channel.send(`Bu komutu sadece **Register staff** yetkisi olanlar kulllanabilir`)
    if(!kayit_ögrenci) return message.channel.send(`**Ögrenci** rolü ayarlanmamiş`)
    if(!kayit_erkek) return message.channel.send(`**Erkek** rolü ayarlanmamiş`)
    if(!kayit_kiz) return message.channel.send(`**Kiz** rolü ayarlanmamiş`)
    if(!kayit_mezun) return message.channel.send(`**Mezun** rolü ayarlanmamiş`)
    if(!kayit_12_sinif) return message.channel.send(`**12 sinif** rolü ayarlanmamiş`)
    if(!kayit_11_sinif) return message.channel.send(`**11 sinif** rolü ayarlanmamiş`)
    if(!kayit_10_sinif) return message.channel.send(`**10 sinif** rolü ayarlanmamiş`)
    if(!kayit_9_sinif) return message.channel.send(`**9 sinif** rolü ayarlanmamiş`)
    if(!kayit_üniversite) return message.channel.send(`**Üniversite** rolü ayarlanmamiş`)
    if(!kayit_türk) return message.channel.send(`**Türk** rolü ayarlanmamiş`)
    if(!kayit_alien) return message.channel.send(`**Alien** rolü ayarlanmamiş`)
    if(!kayitsiz) return message.channel.send(`**Kayitsiz** rolü ayarlanmamiş`)
    if(!kayit_log) return message.channel.send(`**Kayit lig** rolü ayarlanmamiş`)
    if(!kayit_kanal) return message.channel.send(`**Kayit kanal** rolü ayarlanmamiş`)

    var member = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    var sinif = args[1]
    var irk = args [2]

    if(!member) return message.channel.send(`Lütfen kayit edilecek kişiyi etiketleyiniz.`)
    if(!sinif) return message.channel.send(`Lütfen sinif belirtiniz.`)
    if(!irk) return message.channel.send(`Lütfen türk/ailen belirtiniz.`)

    let kayitci = db.fetch(`kayit_yetkilisi_${message.guild.id}_${message.author.id}`)
    if(!kayitci) db.set(`kayit_yetkilisi_${message.guild.id}_${message.author.id}`, 0)
    db.add(`kayit_yetkilisi_${message.guild.id}_${message.author.id}`, 1)


    let üye = message.guild.members.cache.get(member.id)

    üye.roles.add(kayit_erkek)
    üye.roles.add(kayit_ögrenci)
    üye.roles.remove(kayitsiz)
    switch(sinif){
        case sinif = "mezun": üye.roles.add(kayit_mezun);
        break;
        case sinif = "12": üye.roles.add(kayit_12_sinif);
        break;
        case sinif = "11": üye.roles.add(kayit_11_sinif);
        break;
        case sinif = "10": üye.roles.add(kayit_10_sinif);
        break;
        case sinif = "9": üye.roles.add(kayit_9_sinif);
        break; 
        case sinif = "üni": üye.roles.add(kayit_üniversite);
        break;

    }
    switch(irk){
        case irk = "türk": üye.roles.add(kayit_türk);
        break;
        case irk = "alien": üye.roles.add(kayit_alien)
        break;
    }


    let kayitlari = db.fetch(`kayit_yetkilisi_${message.guild.id}_${message.author.id}`)
    const botEmbed = new discord.MessageEmbed()
        .setDescription(`
        Kayit olan üye: ${member}
        
        Kayit yetkilisinin bilgileri:
        Kayit yapan kişi : ${message.author}
        Yaptigi kayitlar : **${kayitlari}** 
        
        `)

    message.channel.send({ embeds: [botEmbed] })
    client.channels.cache.get(kayit_log).send({ embeds: [botEmbed] })

}


module.exports.help = {
    name: "e",
    category: "general",
    description: "Erkek kayit etme komutu"
}