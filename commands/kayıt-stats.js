const discord = require("discord.js");
const db = require("nrc.db")
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

    if(!kayit_ytk) return message.channel.send(`**Kayit yetkilisi** rolü ayarlanmamış`)
    if(!message.member.roles.cache.has(kayit_ytk)) return message.channel.send(`Bu komutu sadece **Register staff** yetkisi olanlar kulllanabilir`)
    if(!kayit_ögrenci) return message.channel.send(`**Ögrenci** rolü ayarlanmamış`)
    if(!kayit_erkek) return message.channel.send(`**Erkek** rolü ayarlanmamış`)
    if(!kayit_kiz) return message.channel.send(`**Kiz** rolü ayarlanmamış`)
    if(!kayit_mezun) return message.channel.send(`**Mezun** rolü ayarlanmamış`)
    if(!kayit_12_sinif) return message.channel.send(`**12 sinif** rolü ayarlanmamış`)
    if(!kayit_11_sinif) return message.channel.send(`**11 sinif** rolü ayarlanmamış`)
    if(!kayit_10_sinif) return message.channel.send(`**10 sinif** rolü ayarlanmamış`)
    if(!kayit_9_sinif) return message.channel.send(`**9 sinif** rolü ayarlanmamış`)
    if(!kayit_üniversite) return message.channel.send(`**Üniversite** rolü ayarlanmamış`)
    if(!kayit_türk) return message.channel.send(`**Türk** rolü ayarlanmamış`)
    if(!kayit_alien) return message.channel.send(`**Alien** rolü ayarlanmamış`)
    if(!kayitsiz) return message.channel.send(`**Kayitsiz** rolü ayarlanmamış`)
    if(!kayit_log) return message.channel.send(`**Kayit lig** rolü ayarlanmamış`)
    if(!kayit_kanal) return message.channel.send(`**Kayit kanal** rolü ayarlanmamış`)


    var member = message.mentions.users.first() || message.author.id
    let kayit = db.fetch(`kayit_yetkilisi_${message.guild.id}_${member}`)

    const botEmbed = new discord.MessageEmbed()
        .setDescription(`
        Yaptığı Kayıt Sayısı: **${kayit ? kayit : "0"}**

        `)
    message.channel.send({ embeds: [botEmbed] })


},

module.exports.help = {
    name: "kayit-stat",
    category: "general",
    description: "Kayit-stat açar"
}