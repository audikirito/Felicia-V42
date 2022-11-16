import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', author, null, buttons, conn.tebakjenaka[id][0])
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `*${command.toUpperCase()} Games 🎮*

*${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} detik*
*🔍 Ketik* ${usedPrefix}hjen Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.tebakjenaka[id] = [
        await conn.sendButton(m.chat, caption, author, `${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakjenaka[id]) conn.sendButton(m.chat, `*_Waktu Habis_*\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗝𝗘𝗡𝗔𝗞𝗔', '/tebakjenaka']
            ], conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
}
handler.help = ['tebakjenaka']
handler.tags = ['game']
handler.command = /^tebakjenaka/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hjen'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]