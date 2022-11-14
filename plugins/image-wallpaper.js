import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Fitur Searching Wallpaper*\n\n*_Contoh: ${usedPrefix}${command} Anime_*`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `*WALLPAPER2 SEARCH*\n\n*🔍 Result From* ${text}`, m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.register = true
handler.limit = 1
handler.command = /^(wallpaper2?)$/i

export default handler