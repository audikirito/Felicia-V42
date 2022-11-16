import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (id in conn.tebakchara) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Di Chat Ini_*', author, null, buttons, conn.tebakchara[id][0])
        throw false
    }
    let res = await fetch('https://api.jikan.moe/v4/characters')
    let jsons = await res.json()
    let jso = jsons.data
    let json = jso.getRandom()
    let caption = `*${command.toUpperCase()} Games 🎮*

*Siapakah Nama Dari Gambar Ini?*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}hcha Untuk Hint
*🎁 Prize* ${poin} XP
    `.trim()
    conn.tebakchara[id] = [
        await conn.sendButton(m.chat, caption, author, `${json.images.jpg.image_url}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakchara[id]) conn.sendButton(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.name}*\nKanji : ${json.name_kanji}\n*Url :* ${json.url}\n*Desk :* ${json.about}`, author, json.images.jpg.image_url, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥', '/tebakchara']
            ], conn.tebakchara[id][0])
            delete conn.tebakchara[id]
        }, timeout)
    ]
}
handler.help = ['tebakchara']
handler.tags = ['game']
handler.command = /^tebakchara/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hcha'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]