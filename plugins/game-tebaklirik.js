import fs from'fs'
import fetch from 'node-fetch'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Di Chat Ini_*', conn.tebaklirik[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
*TEBAK-LIRIK GAMES 🎮*

*${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}teli Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.tebaklirik[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '.teli', m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.register = true
handler.limit = 1
export default handler
