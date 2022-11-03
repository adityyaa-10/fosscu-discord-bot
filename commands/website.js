const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('website')
        .setDescription('FOSSCU Official Website'),
    async execute(interaction){
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`https://www.saynotocp.org/`);
    }
};