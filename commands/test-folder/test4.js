const send = require("quick.hook");
const Discord = require("discord.js")
exports.run = (Discord, message, args) => {

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
		   const color = args[0]
		   let title = args[0];
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   const colour = args.slice(2).join("");
		   let embed = new Discord.RichEmbed
		   .setColor(message.guild.me.displayHexColor)
		   .setThumbnail(message.guild.iconURL)
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
      send(message.channel, embed, {
        name: 'Announcment: ' + title,
        icon: message.guild.iconURL
    });
    if (text.length < 1) return message.channel.send("Can not announce nothing");
}