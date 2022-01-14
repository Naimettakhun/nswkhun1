const {Client, Intents, DiscordAPIError, Message} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

client.on('ready', ()=>{
    console.log('your bot is ready')
})

client.on('messageCreate', msg=>{
  if (msg.content == 'กล้า'){
    msg.reply('SU student')
  }
  if (msg.content == 'พีมะ'){
    msg.reply('KMITL student')
  }
  if (msg.content == 'นาย'){
    msg.reply('KU student')
  }
  if (msg.content == 'เป็นปลา'){
    msg.reply('ฟิต')
  }
  if (msg.content == 'มิดฟิว'){
    msg.reply('SWU student')
  }
  if (msg.content == 'commands'){
    msg.reply('-นาย,-พีมะ,-กล้า,-มิดฟิว')
  }
})

run = (message) => {
  message.reply('Here is an image')
}

client.login(process.env.TOKEN)

