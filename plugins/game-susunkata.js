import fetch from 'node-fetch'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
*SUSUN-KATA Games 🎮*

*${json.soal}*

*🗃️ Tipe ${json.tipe}*
*⏱️ Timeout* ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}suka Untuk Bantuan
*🎁 Prize* ${poin} XP
`.trim()
    conn.susunkata[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendBut(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, wm, '𝗦𝗨𝗦𝗨𝗡-𝗞𝗔𝗧𝗔', '.susunkata')
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i
handler.register = true
handler.limit = 1
export default handler
