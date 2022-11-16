import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Fitur Untuk Unduh Tik Tok MP4*\n\n*_Contoh: ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243_*`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    
    let result = `*TIK TOK DOWNLOADER*

${res.title}

Author: *${res.author}*
`
    conn.sendButtonVid(m.chat, res.video, result, '© Created By 么 Kitsuneee', `𝗠𝗣𝟯`, `.gettt ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tt|tiktokdl|tiktokmp4|tiktoknowm)$/i
handler.register = true
handler.limit = 1
export default handler