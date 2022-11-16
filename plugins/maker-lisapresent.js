import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*_Contoh: .lisapresent Bot Felica_*'
  m.reply('*Processing...*')
  let res = `https://ziy.herokuapp.com/api/maker/LisaPresentation?text=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'lisa.jpg', `*Done*`, m, false)
}
handler.help = ['lisapresent'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(lisapresent)$/i
handler.limit = true
handler.register = true
export default handler