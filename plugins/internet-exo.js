import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/exo?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From EXO*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(exo)$/i
handler.tags = ['internet']
handler.help = ['exo']
handler.limit = 1
handler.register = true
export default handler
