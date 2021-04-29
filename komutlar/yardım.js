const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:hypesquad:829092952319328266> Moderation Yardım Komutları')
.setTimestamp()
.addField('<a:command:829368312042618919> ?afk', 'Afk olursunuz.')
.addField('<a:command:829368312042618919> ?avatar', 'Profilinizi görüntülersiniz.')
.addField('<a:command:829368312042618919> ?isim-değiştir', 'Belirlenen kişinin ismini değiştirir.')
.addField('<a:command:829368312042618919> ?sil', 'Mesajları siler.')
.addField('<a:command:829368312042618919> ?ever-here-engel', 'Everyone ve hereyi engeller.')
.addField('<a:command:829368312042618919> ?küfür-engel', 'Küfürleri engeller.')
.addField('<a:command:829368312042618919> ?otorol', 'Sunucuya gelenlere otomatik rol verir.')
.addField('<a:command:829368312042618919> ?reklam-engel', 'Reklam atılmasını engeller.')
.addField('<a:command:829368312042618919> ?ban', 'Belirlenen kişiyi sunucudan banlar.')
.addField('<a:command:829368312042618919> ?mute', 'Belirlenen kişiye mute atar.')
.addField('<a:command:829368312042618919> ?jail', 'Belirlenen kişiyi jaile atar.')
.addField('<a:command:829368312042618919> ?vmute', 'Belirlenen kişiyi seste susturur.')
.addField('<a:command:829368312042618919> ?unjail', 'Belirlenen kişiyi jailden çıkarır.')
.addField('<a:command:829368312042618919> ?unmute', 'Belirlenen kişiyi mute den çıkartır.')
.addField('<a:command:829368312042618919> ?caps-engel', 'Caps lock ile yazmanızı engeller.')
.addField('<a:command:829368312042618919> ?emoji-ekle', 'Sunucuya emoji ekler.')
.addField('<a:command:829368312042618919> ?git', 'Karşı taraf onaylarsa onun olduğu ses kanalına gidersiniz.')
.addField('<a:command:829368312042618919> ?oylama', 'Oylama başlatır.')
.addField('<a:command:829368312042618919> ?ping', 'Bot ping değerini ölçer.')
.addField('<a:command:829368312042618919> ?tag', 'Sunucunun tagını gösterir.')
.addField('<a:command:829368312042618919> ?unban', 'Belirlenen kişinin banını açar.')
.addField('<a:command:829368312042618919> ?yavaş-mod', 'Chatin yazma süresini ayarlar.')
.addField('<a:command:829368312042618919> ?çek', 'Karşı taraf onaylarsa kişiyi ses kanalına çeker.')
.addField('<a:command:829368312042618919> ?yardım', 'Botun komutlarını gösterir.')

.setFooter('Berthod Moderation', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};