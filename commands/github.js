const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('FOSSCU GitHub account'),
    async execute(interaction){
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`https://github.com/FOSS-Community/`);
    }
};