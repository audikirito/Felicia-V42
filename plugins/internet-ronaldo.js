import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Result From Ronaldo*", author, url, [['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]], m)}
handler.help = ['ronaldo']
handler.tags = ['internet']
handler.command = /^(ronaldo)$/i
handler.limit = true
export default handler