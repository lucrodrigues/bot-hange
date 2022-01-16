const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'mostra o ping do bot.'
        })
    }

    run = (interaction) => {
        interaction.reply(`Pong! O ping do bot é \`${this.client.ws.ping}\`ms.`)

        //para o unico usuario ver
        //content: 'pong!'
        //ephemeral: true
    }
}

