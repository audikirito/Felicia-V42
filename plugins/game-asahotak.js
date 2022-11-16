
import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*ASAH-OTAK Games 🎮*

*_${json.soal}_*

*⏱️ Timeout* *${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}ao Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendBut(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, wm, '𝗔𝗦𝗔𝗛-𝗢𝗧𝗔𝗞', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.register = true
handler.limit = 1
export default handler
