import gplay from 'google-play-scraper'

let handler = async (m, { conn, text }) => {
	if (!text) throw '*Fitur Mencari Apk Dari Play Store*\n\n*_Contoh: apksearch WhatsApp_*'
	let res = await gplay.search({ term: text })
	if (!res.length) throw `*_Apk "${text}" Tidak Ditemukan_*`
	let opt = { contextInfo: { externalAdReply: { title: res[0].title, body: res[0].summary, thumbnail: (await conn.getFile(res[0].icon)).data, sourceUrl: res[0].url }}}
	res = res.map((v) => `*💬 Title:* ${v.title}\n*Dev:* ${v.developer}\n*Price:* ${v.priceText}\n*Score:* ${v.scoreText}\n*Link:* ${v.url}`).join`\n\n`
	m.reply(res, null, opt)
}
handler.help = ['apksearch']
handler.tags = ['tools']
handler.command = /^(apksearch)$/i
handler.register = true
export default handler
