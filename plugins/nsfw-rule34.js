import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '*_Fitur NSFW Tidak Akti Digrup Ini_*',wm.date, null, [['𝗘𝗡𝗔𝗕𝗟𝗘', '.on nsfw']], m)
	
    if (!text) throw `*_Contoh: ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendButton(m.chat,` \`\`\`➩ Random Nsfw Rule34 ${text ? text.capitalize() : false}\`\`\` `, wm.date, res,['𝗡𝗘𝗫𝗧', `.${command} ${text}`], m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw']
handler.command = ['rule34']

handler.premium = false
handler.limit = 5

export default handler