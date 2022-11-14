import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat,`*. . .*`, wm, res, [['𝗗𝗔𝗥𝗞 𝗝𝗢𝗞𝗘','.darkjoke']] ,m)
}
handler.help = ['darkjoke','darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = true
handler.register = true

export default handler