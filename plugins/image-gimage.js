import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Fitur Searching Foto Dari Situs Google*\n\n*_Contoh: ${usedPrefix}${command} Kayes_*`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendHydrated(m.chat,`
*${htki} GOOGLE IMAGE ${htka}*

*🔍 Result:* ${text}
*🌐 Source:* Google
`, wm, link, link, '*🔗 URL:* ', null, null, [['𝗡𝗘𝗫𝗧', `.image ${text}`],[null,null],[null,null]],m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i
handler.register = true
handler.limit = 1
export default handler