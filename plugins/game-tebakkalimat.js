import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
    let id = m.chat
    if (id in conn.tebakkalimat) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', author, null, buttons, conn.tebakkalimat[id][0])
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `*${command.toUpperCase()} Games 🎮*

*${json.soal}*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} detik*
*🔍 Ketik ${usedPrefix}hkal Untuk Bantuan
*🎁 Prize ${poin} XP
    `.trim()
    conn.tebakkalimat[id] = [
        await conn.sendButton(m.chat, caption, author, `${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkalimat[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗞𝗔𝗟𝗜𝗠𝗔𝗧', '/tebakkalimat']
            ], conn.tebakkalimat[id][0])
            delete conn.tebakkalimat[id]
        }, timeout)
    ]
}
handler.help = ['tebakkalimat']
handler.tags = ['game']
handler.command = /^tebakkalimat/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hkal'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]