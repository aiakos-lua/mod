const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
 const istatistikler = new Discord.MessageEmbed()
 message.channel.send(`**Doğum günün bitti amınakoyduğum daha neyini yazıyon!** \`ψ \``)
 return message.channel.send();
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mrt",
  description: "",
  usage: ""
};