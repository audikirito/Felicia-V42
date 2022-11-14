//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '*_Reply Stikernya_*'
      stiker = await sticker(img, false, '', '© 𝗦𝘁𝗶𝗸𝗲𝗿 𝗣𝘂𝗻𝘆𝗮 𝟲𝟮𝟴𝟭𝟯𝟰𝟳𝟵𝟮𝟳𝟴𝟲𝟮')
    } else if (args[0]) stiker = await sticker(false, args[0], '', '么 Kitsuneee')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong$/i
handler.owner = true

export default handler
