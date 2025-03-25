const {Client,Events,GatewayIntentBits}=require("discord.js");
const token=process.env.TOKEN;

const client=new Client({intents:[GatewayIntentBits.Guilds]});

client.once(Events.ClientReady,c=>{
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.login(token);
