import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Total Fitur Bot Saat Ini: ${totalf}*\n`,wm + '\n\n' + botdate, giflogo, [['𝗠𝗘𝗡𝗨','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: '么 Kitsuneee',
                        title: bottime,
                        body: 'Always Update Feature',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
handler.register = true
export default handler