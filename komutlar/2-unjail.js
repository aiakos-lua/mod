const Discord = require("discord.js");

exports.run = async(client, message, args, ayar, emoji) => {
 if (!message.member.roles.cache.has("824982273258422304") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField("Yetersiz Yetki",`Bu Komutu Kullanmak içi Yeterli Yetkiniz Yok`)).then(m => m.delete({timeout: 7000}));
  
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!uye) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`Bu işlemi yapabilmek için <@&824982273258422304> yetkisine ihtiyacın var.`)).then(x => x.delete({timeout: 5000}));
  uye.roles.remove("824982273258422304").catch();
  uye.roles.add("").catch();
  if(uye.voice.channel) uye.voice.kick().catch();
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} üyesi, ${message.author} tarafından jailden çıkarıldı!`)).catch();
  client.channels.cache.get("829617107662012416").send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} İsimli Kullanıcı Karantinadan Çıkarıldı\n\n• Yetkili: <@!${message.author.id}> \`${message.author.id}\`\n• Kullanıcı: <@!${uye.id}> \`${uye.id}\``)).catch();
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ["unjail","unkarantina","un-jail"]
    }
    
    exports.help = {
  name: "unjail",
  aliases: ['uncezalı'],
  usage: "unjail [üye]",
  description: "Belirtilen üyeyi jailden çıkarır."
    }

//SAFE CODE ❤ #1.5K

//SALVO CODE ❤ #1.6K

//GÜLE GÜLE KULLAN DOSTUM :) ❤ 