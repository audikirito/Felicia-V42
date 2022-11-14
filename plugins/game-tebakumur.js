import axios from "axios"
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)

    await m.reply('Searching...')
	axios.get(`http://lolhuman.herokuapp.com/api/tebakumur?apikey=KitsuneOFC&name=${text}`).then ((res) => {
	 	let hasil = `*TEBAK-UMUR GAMES 🎮*\n\n*Namamu:* ${text}\n*Umurmu:* ${res.data.result.age}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tebakumur'].map(v => v + ' <nama>')
handler.tags = ['internet', 'fun']
handler.command = /^(tebakumur)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

export default handler
