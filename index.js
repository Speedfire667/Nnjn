const mineflayer = require('mineflayer');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer');

const bot = mineflayer.createBot({
  host: 'kamaga321.aternos.me', // Endereço do servidor
  port: 11324,                  // Porta do servidor
  username: 'BotName',          // Nome do bot
});

bot.on('login', () => {
  console.log('Bot entrou no servidor');
  startJumping();
  mineflayerViewer(bot, { port: 3000 }); // Inicia o visualizador na porta 3000
  console.log('Visualizador disponível em http://localhost:3000');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Olá, ${username}! Você disse: ${message}`);
});

bot.on('error', (err) => {
  console.log(`Erro: ${err}`);
});

bot.on('end', () => {
  console.log('Bot desconectado');
});

function startJumping() {
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 100); // Ajuste o tempo de pulo conforme necessário
  }, 500); // Ajuste o intervalo entre os pulos conforme necessário
}
