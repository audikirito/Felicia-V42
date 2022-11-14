import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/neko?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From Neko*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = 1
handler.register = true
export default handler
