    import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Fitur Untuk Unduh Tik Tok MP3*\n\n*_Contoh: ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243_*`
    let res = (await axios.get(API('males', '/tiktok2', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    
conn.sendFile(m.chat, res.audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: snh,
    mediaType: 2, 
    description: snh,
    title: "Done",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/b5fd44a77c2b57b0ed28e.jpg')).buffer(),
    sourceUrl: snh}}})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
handler.register = true
export default handler