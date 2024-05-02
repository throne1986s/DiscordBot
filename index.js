// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
 });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (message)=>{
    if(message.content ==='!hello'){
        message.channel.send('Hello!!');
    }
});

client.on(Events.MessageDelete, (message)=>{
    // console.log(`${message.author.username}刪除了${message.content}`);
    message.channel.send('回收怪抓到!!');
});

client.on(Events.MessageUpdate, (message)=>{
    // console.log(`${message.author.username}更新了${message.content}改為${message.reactions.message.content}`);
    message.channel.send('還想偷改阿!!');
});

// Log in to Discord with your client's token
client.login(token);