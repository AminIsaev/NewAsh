const Discord = require("discord.js");

module.exports.run = async (bot, message, args, con) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong.. Твой пинг ${m.createdTimestamp - message.createdTimestamp}ms. API пинг ${Math.round(bot.ping)}ms`);
}

module.exports.help = {
    name: "эш пинг",
    description: "empty",
    hide: "1",
    usage: "эш пинг"
}