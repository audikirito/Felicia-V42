import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `*Fitur Untuk Mencari Informasi Anime Disitus Otaku Desu*\n\n*_Contoh: ${usedPrefix}${command} Naruto_*`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
*OTAKUDESU SEARCH 🔎*

Judul: *${result.judul}*
Jepang: *${result.jepang}*
Rate: *${result.rate}*
Produser: *${result.produser}*
Tipe: *${result.tipe}*
Status: *${result.status}*
Episode: *${result.episode}*
Durasi: *${result.durasi}*
Rilis: *${result.rilis}*
Studio: *${result.studio}*
Genre: *${result.genre}*
Desc: ${result.desc}
Batch: *${result.batch}*

Batch HD: *${result.batchSD}*

Batch FHD: *${result.batchHD}*
`
await conn.sendButtonImg(m.chat, datathumb, otaku, wm, '𝗠𝗘𝗡𝗨', '.menu', m)
}

handler.help = ['otakudesu'].map(v => v + ' <title>')
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i
handler.register = true
handler.limit = 2
export default handler
