import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/bts?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From BTS*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(bts)$/i
handler.tags = ['internet']
handler.help = ['bts']
handler.limit = 1
handler.register = true
export default handler
