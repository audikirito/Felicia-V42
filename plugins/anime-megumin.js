import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/megumin?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From Megumin*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(megumin)$/i
handler.tags = ['anime']
handler.help = ['megumin']
handler.limit = 1
handler.register = true
export default handler
