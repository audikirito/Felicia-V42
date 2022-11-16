import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `*_Contoh: #artikata Hai_*`
    
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${text}&apikey=MIMINGANZ`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*📑 Artikata: ${text}*
  ${x.result}`, wm, null, [
                ['𝗠𝗘𝗡𝗨', `.menu`],
                ['𝗢𝗪𝗡𝗘𝗥', `.owner`]
            ], m)

}
handler.help = ['artikata'].map(v => v + ' <text>')
handler.tags = ['internet']
handler.command = /^artikata$/i
handler.register = true
handler.limit = 1
export default handler
