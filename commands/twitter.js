const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('Twitter')
        .setDescription('FOSSCU Official Twitter Handle'),
    async execute(interaction){
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`https://twitter.com/fosscuk`);
    }
};