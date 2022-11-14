import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.tebakbendera[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*TEBAK-BENDERA GAMES 🎮*

*⛳ Bendera Apakah Ini?*
*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}tebe Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendButtonImg(m.chat, json.img, caption, wm3, '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '.tebe', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakbendera[id]) await conn.sendBut(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.name}*`, '', '𝗧𝗘𝗕𝗔𝗞-𝗕𝗘𝗡𝗗𝗘𝗥𝗔', '.tebakbendera', conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.register = true
handler.limit = 1
export default handler
