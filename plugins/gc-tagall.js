import moment from 'moment-timezone'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let bcbg = 'https://telegra.ph/file/6726375e0308e920330d5.jpg'
    conn.send3ButtonLoc(m.chat, bcbg, wm, `*TAG-ALL*\n\n${text ? `${text}\n` : ''}\n` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n` + '\n','𝗠𝗘𝗡𝗨', '.menu', '𝗢𝗪𝗡𝗘𝗥', '.owner', `\nAq suka ma owner botny`, '.huuu', null,
 /*let m.reply(`${text ? `${text}\n` : ''}┌─「 Tag All 」\n` + users.map(v => '│◦❒ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, */{
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true
handler.register = true
export default handler
