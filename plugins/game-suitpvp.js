let timeout = 60000
let poin = 7999
let poin_lose = -8999
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
  if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
*SUIT PvP*

*@${m.sender.split`@`[0]}* Menantang *@${m.mentionedJid[0].split`@`[0]}*

Silahkan *@${m.mentionedJid[0].split`@`[0]}* 
`.trim()
  let footer = `Ketik *"terima/ok/gas"* Untuk Memulai Suit\nKetik *"tolak/gabisa/nanti"* Untuk Menolak`
  conn.suit[id] = {
    chat: await conn.send2Button(m.chat, caption, footer, '𝗧𝗘𝗥𝗜𝗠𝗔', 'ok', '𝗧𝗢𝗟𝗔𝗞', 'tolak', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*_WAKTU SUIT HABIS_*`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit2'].map(v => v + ' @tag')
handler.command = /^suit(pvp|2)$/i
handler.limit = 1
handler.group = true

export default handler
