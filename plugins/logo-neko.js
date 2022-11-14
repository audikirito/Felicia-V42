import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Fitur Maker Logo Neko*\n\n*_Contoh: .logoneko Kei|Ofc_*'
  m.reply('*Make...*')
  let res = `https://ziy.herokuapp.com/api/maker/girlneko?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `*Done*`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i
handler.limit = true
handler.register = true

export default handler
