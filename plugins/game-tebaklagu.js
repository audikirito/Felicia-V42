import fetch from 'node-fetch'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '3AaKHE9ZMMEdyRadsg8rcy' }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.result
    // if (!json.status) throw json
    let caption = `
*TEBAK-LAGU GAMES 🎮*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}cek* Untuk Bantuan
*🎁 Prize* ${poin} XP
*⚠️ Balas Pesan Ini Untuk Menjawab*`.trim()
    conn.tebaklagu[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '.cek', m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.reply(m.chat, `*Waktu Habis ⏱️*\nJawabannya Adalah *${json.judul}*`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = 1
handler.register = true
export default handler