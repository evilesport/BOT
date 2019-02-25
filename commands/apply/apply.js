const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  await message.delete().catch(O_o => {});
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let ich = ("Ich#3236"); 
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(` Server created date • ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .setTitle('Apply Information')
   .addField('')
   message.member.send(serverembed);


  }