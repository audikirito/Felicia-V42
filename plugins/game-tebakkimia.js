import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.tebakkimia[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*TEBAK-KIMIA GAMES 🎮*

Nama Unsur Dari Lambang *${json.lambang}* Adalah...

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik ${usedPrefix}teki Untuk Bantuan
*🎁 Prize ${poin} XP
*⚠️ Reply Pesan Ini Untuk Menjawab*
`.trim()
    conn.tebakkimia[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.reply(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.unsur}*`, conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i
handler.register = true
handler.limit = 1

export default handler