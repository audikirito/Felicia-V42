import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Fitur Untuk Unduh File Dari Situs Mediafire*\n\n*_Contoh: ${usedPrefix}${command} https://www.mediafire.com/file/3gt8lz73bb8j6m7/MOD+PACK+VARIO+AEROX+BY+ACRUX+A.apk.zip/file_*`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*MEDIAFIRE DOWNLOADER*

*💬 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.register = true
handler.limit = 1
handler.limit = true

export default handler
