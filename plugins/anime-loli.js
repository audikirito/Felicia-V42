import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/loli?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From Loli*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = 1
handler.register = true
export default handler
