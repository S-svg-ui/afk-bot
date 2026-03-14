const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'mumumelelo.falix.gg',
    port: 25565,
    username: 'AFK_24_7',
    version: "1.21.1"
  })

  bot.on('spawn', () => {
    console.log("✅ Joined server")

    setInterval(() => {
      bot.swingArm()
    }, 45000)
  })

  // ⭐ RESOURCE PACK AUTO ACCEPT
  bot.on('resourcePack', (url, hash) => {
    console.log("📦 Accepting resource pack...")
    bot.acceptResourcePack()
  })

  bot.on('kicked', console.log)
  bot.on('error', console.log)

  bot.on('end', () => {
    console.log("❌ Disconnected — Reconnecting in 10s")
    setTimeout(createBot, 10000)
  })
}

createBot()
