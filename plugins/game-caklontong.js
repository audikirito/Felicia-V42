import { caklontong } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, '*_Masih Ada Soal Belum Terjawab Dichat Ini_*', conn.caklontong[id][0])
    let json = await caklontong()
    let caption = `
*CAK-LONTONG Games ๐ฎ*

*_${json.soal}_*

*โฑ๏ธ Timeout* *${(timeout / 1000).toFixed(2)} Detik*
*๐ Ketik* ${usedPrefix}calo Untuk Bantuan
*๐ Prize* ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, author, null, [['๐๐๐ก๐ง๐จ๐๐ก', `${usedPrefix}calo`]], m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `*Waktu Habisโฑ๏ธ*\nJawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, author, null, [['๐๐๐-๐๐ข๐ก๐ง๐ข๐ก๐', `${usedPrefix}caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.register = true
handler.limit = 1
export default handler
