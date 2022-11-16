import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*_.gta Kei_*'
  m.reply('*_Memproses..._*')
  let res = `https://api.lolhuman.xyz/api/gtapassed?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynz.jpg', `*Done*`, m, false)
}
handler.help = ['gta'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(gta)$/i
handler.limit = true
handler.premium = true
handler.register = true
export default handler