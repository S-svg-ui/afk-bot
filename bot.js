const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'YOUR_SERVER_IP',
    port: 25565,
    username: 'AFK_24_7',
    version: false // auto detect (important for 1.21)
  })

  bot.on('spawn', () => {
    console.log("✅ Bot joined server")

    // VERY LIGHT anti‑AFK (no chunk loading)
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 400)

    }, 45000) // every 45 sec
  })

  // Auto reconnect (important for 24/7)
  bot.on('end', () => {
    console.log("❌ Disconnected... Reconnecting in 10s")
    setTimeout(createBot, 10000)
  })

  bot.on('error', (err) => {
    console.log("⚠️ Error:", err.message)
  })
}

createBot()
