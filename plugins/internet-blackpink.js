import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/blackpink?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From BlackPink*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(blackpink)$/i
handler.tags = ['internet']
handler.help = ['blackpink']
handler.limit = 1
handler.register = true
export default handler
