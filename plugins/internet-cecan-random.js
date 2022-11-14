import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/cecan?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From Cecan*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(cecan)$/i
handler.tags = ['internet']
handler.help = ['cecan']
handler.limit = 1
handler.register = true
export default handler
