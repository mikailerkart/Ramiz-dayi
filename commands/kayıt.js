const discord = require("discord.js");
const db = require("nrc.db");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('909023960207863808')) /*üst yönetim yetkili rol */ return message.reply("kayıt atmak için yetkin yok.");

    const botEmbed = new discord.MessageEmbed()
        .setDescription(`
            **${config.prefix}kayit kayit-yetkilisi**: Kayıt yetkilisi rolünü ayarlarsın.
            **${config.prefix}kayit ögrenci-rol**: Öğrenci üye rolünü ayarlarsiµın.
            **${config.prefix}kayit erkek-rol**: Erkek üye rolünü ayarlarsın.
            **${config.prefix}kayit kiz-rol**: Kız üye rolünü ayarlarsın.
            **${config.prefix}kayit mezun-rol**: Mezun üye rolünü ayarlarsın.
            **${config.prefix}kayit 12-sinif-rol**: 12 sınıf üye rolünü ayarlarsın.
            **${config.prefix}kayit 11-sinif-rol**: 11 sınıf üye rolünü ayarlarsın.
            **${config.prefix}kayit 10-sinif-rol**: 10 sınıf üye rolünü ayarlarsın.
            **${config.prefix}kayit 9-sinif-rol**: 9 sınıf üye rolünü ayarlarsın.
            **${config.prefix}kayit üniversite-rol**: Üniversite üye rolünü ayarlarsın.
            **${config.prefix}kayit türk-rol**: Türk üye rolünü ayarlarsın.
            **${config.prefix}kayit alien-rol**: Alien üye rolünü ayarlarsın.
            **${config.prefix}kayit kayitsiz-rol**: Kayıtsız rolünü ayarlarsın.
            **${config.prefix}kayit kayit-log**: kayıt log kanalini ayarlarsın.
            **${config.prefix}kayit kayit-kanal**: Kayıt kanalini ayarlarsın.
            `)

        if(!args[0]) return message.channel.send({embeds: [botEmbed]})

        if(args[0] === "kayit-yetkilisi"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayit yetkilisi** rolünü etiketleyiniz.`)
        db.set(`kayit_yetkili_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayit Yetkilisi** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "ögrenci-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Ögrenci** rolünü etiketleyiniz.`)
        db.set(`kayit_ögrenci_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Ögrenci** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "erkek-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Erkek** rolünü etiketleyiniz.`)
        db.set(`kayit_erkek_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Erkek** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "kiz-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kiz** rolünü etiketleyiniz.`)
        db.set(`kayit_kiz_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kiz** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "mezun-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Mezun** rolünü etiketleyiniz.`)
        db.set(`kayit_mezun_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Mezun** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "12-sinif-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **12 sinif** rolünü etiketleyiniz.`)
        db.set(`kayit_12_sinif_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **12 sinif** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "11-sinif-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **11 sinif** rolünü etiketleyiniz.`)
        db.set(`kayit_11_sinif_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **11 sinif** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "10-sinif-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **10 sinif** rolünü etiketleyiniz.`)
        db.set(`kayit_10_sinif_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **10 sinif** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "9-sinif-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **9 sinif** rolünü etiketleyiniz.`)
        db.set(`kayit_9_sinif_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **9 sinif** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "üniversite-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Üniversite** rolünü etiketleyiniz.`)
        db.set(`kayit_üniversite_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Üniversite** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "türk-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Türk** rolünü etiketleyiniz.`)
        db.set(`kayit_türk_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Türk** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "alien-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Alien** rolünü etiketleyiniz.`)
        db.set(`kayit_alien_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Alien** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "kayitsiz-rol"){
            let rol = message.mentions.roles.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayitsiz** rolünü etiketleyiniz.`)
        db.set(`kayit_kayitsiz_rol_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayitsiz** rolü ${rol} olarak ayarlandı.`)
        
        }
        
        if(args[0] === "kayit-log"){
            let rol = message.mentions.channels.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayit log** rolünü etiketleyiniz.`)
        db.set(`kayit_kayit_log_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayit log** rolü ${rol} olarak ayarlandı.`)
        
        }

        if(args[0] === "kayit-kanal"){
            let rol = message.mentions.channels.first()
        
        if(!rol) return message.channel.send(`Lütfen **Kayit kanal** rolünü etiketleyiniz.`)
        db.set(`kayit_kayit_kanal_${message.guild.id}`, rol.id)
        message.channel.send(`Başarılı bir şekilde **Kayit kanal** rolü ${rol} olarak ayarlandı.`)
        
        }
    
}

module.exports.help = {
    name: "kayit",
    category: "general",
    description: "Kayıt ayarlama komutu"
    
}