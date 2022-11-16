import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw '*Fitur Untuk Mencari Info Corona*\n\n*_Contoh: .covid Indonesia_*'
  if (json.confirmed) m.reply(`
*🌏 Country:* ${text}
*✅ Confirmed:* ${json.confirmed.value}
*📉 Healed:* ${json.recovered.value}
*☠️ Dead:* ${json.deaths.value}
*📁 Info Update:* ${json.lastUpdate}
`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <negara>')
handler.tags = ['internet']
handler.limit = true
handler.command = /^(corona|covid|covid19)$/i
export default handler
