
                let Discord;
                let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                var server, ping_per, fluffycat, channle, channle_ser;


s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!setup' && (s4dmessage.member).hasPermission('KICK_MEMBERS')) {
    s4dmessage.delete();
    server = (s4dmessage.guild);
    channle = (s4dmessage.channel);
    channle.send(String('✅ Done!'));
    await delay(Number(2)*1000);
    s4dmessage.delete();
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping-start') {
    s4dmessage.delete();
    ping_per = (s4dmessage.member);
    s4dmessage.channel.send(String('❗ Pinging To Start The Server...'));
    fluffycat.send(String((String(ping_per) + ', Wants To Start The Server')));
  }

});

s4d.client.login(process.env.token).catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!set-ping' && (s4dmessage.member).hasPermission('KICK_MEMBERS')) {
    s4dmessage.delete();
    fluffycat = (s4dmessage.member);
    channle.send(String('✅ Done!'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!online') {
    s4dmessage.delete();
    channle_ser.send(String('✅ Online!'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!loading') {
    s4dmessage.delete();
    channle_ser.send(String('🔃 The Server Is Loading...'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!setup-server' && (s4dmessage.member).hasPermission('KICK_MEMBERS')) {
    s4dmessage.delete();
    server = (s4dmessage.guild);
    channle_ser = (s4dmessage.channel);
    channle_ser.send(String('✅ Done!'));
    await delay(Number(2)*1000);
    s4dmessage.delete();
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!off') {
    s4dmessage.delete();
    channle_ser.send(String('⛔ The Server Is Offline!'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!about-off') {
    s4dmessage.delete();
    channle_ser.send(String('⛔ The Server Will Go Offline Soon!'));
  }

});

                s4d;
            