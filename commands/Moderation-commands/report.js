const discord = require('discord.js');
const config = require('./rconfig.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.find('name', config.reportsChannel);

    if (!target) return message.reply('please specify a member to report!');
    if (!reason) return message.reply('please specify a reason for this report!');
    if (!reports) return message.reply(`please create a channel called ${config.reportsChannel} to log the reports!`);

    let embed = new discord.RichEmbed()
        .setColor('ORANGE')
        .setThumbnail(target.user.avatarURL)
        .addField('Reported Member', `${target.user.username} with an ID: ${target.user.id}`)
        .addField('Reported By', `${message.author.username} with an ID: ${message.author.id}`)
        .addField('Reported Time', message.createdAt)
        .addField('Reported In', message.channel)
        .addField('Reported Reason', reason)
        .setFooter('Reported user imformation', target.user.displayAvatarURL);

    let sendembed = new discord.RichEmbed()
    .setColor('ORANGE')
    .setDescription(`**${message.author} you're report was succesfull.**`)
    .setFooter(`Report from ${message.author.username}`, target.user.displayAvatarURL);

    message.channel.send(sendembed).then(msg => msg.delete(4000));
    reports.send(embed);

};

module.exports.help = {
    name: 'report'
};