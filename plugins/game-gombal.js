import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakgombal = conn.tebakgombal ? conn.tebakgombal : {}
    let id = m.chat
    if (id in conn.tebakgombal) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', author, null, buttons, conn.tebakgombal[id][0])
        throw false
    }
    let res = await fetch(`https://sekha.me/api/game/tebakgombal?apikey=apirey`)
    let json = await res.json()
  let caption = `*${command.toUpperCase()} Games 🎮*

*${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}hgom Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.tebakgombal[id] = [
        await conn.sendButton(m.chat, caption, author, `${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgombal[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗚𝗢𝗠𝗕𝗔𝗟', '/tebakgombal']
            ], conn.tebakgombal[id][0])
            delete conn.tebakgombal[id]
        }, timeout)
    ]
}
handler.help = ['tebakgombal']
handler.tags = ['game']
handler.command = /^tebakgombal/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hgom'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]