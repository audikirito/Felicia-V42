import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
/*let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', wm, json.result.female,[['🔄 Next 🔄', `/${command}`]], m)
conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', wm, json.result.male, [['🔄 Next 🔄', `/${command}`]], m) */
let jsn = await fetch(`https://ziy.herokuapp.com/api/gacha/ppcouple?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, '𝗙𝗼𝗿 𝗚𝗶𝗿𝗹𝘀', wm, json.result.female,[['𝗡𝗘𝗫𝗧', `/${command}`]], m)
conn.sendButton(m.chat, '𝗙𝗼𝗿 𝗠𝗲𝗻', wm, json.result.male, [['𝗡𝗘𝗫𝗧', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
handler.register = true
handler.limit = 1
export default handler
