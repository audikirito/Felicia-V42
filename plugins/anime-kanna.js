import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/kanna?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From Kanna*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(kanna)$/i
handler.tags = ['anime']
handler.help = ['kanna']
handler.limit = 1
handler.register = true
export default handler
