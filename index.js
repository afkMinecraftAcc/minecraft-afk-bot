const mineflayer = require('mineflayer');
const http = require('http');

// --- BOT SETTINGS ---
const bot = mineflayer.createBot({
  host: 'mc.minepeak.org', // Put your MC server IP here
  username: 'CL247AFK',
  auth: 'offline'
});

const MY_NAME = 'CallMeLeen'; // Your MC username
const PASS = 'Leen8899'; // Bot's /login password

bot.on('message', (jsonMsg) => {
  const message = jsonMsg.toString();
  if (message.includes('/reg')) bot.chat(`/reg ${PASS}`);
  if (message.includes('successfully logged in')) {
    setTimeout(() => bot.chat('/s2'), 3000);
  }
  if (message.includes(MY_NAME) && message.includes('teleport')) {
    bot.chat('/tpaccept');
  }
});

// --- KEEP ALIVE SERVER (Required for Render) ---
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(8080);

bot.on('error', (err) => console.log(err));
bot.on('end', () => console.log("Disconnected"));
