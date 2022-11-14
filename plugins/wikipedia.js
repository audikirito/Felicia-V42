import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Fitur Untuk Search Situs Dari Wikipedia*\n\n*_Contoh: ${usedPrefix}${command} Whatsapp_*`
  let json = await wikipedia(text)
  m.reply(`
*${json.title}*
${json.img}

${json.articles}
`.trim())
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
handler.register = true
handler.limit = 1
export default handler
