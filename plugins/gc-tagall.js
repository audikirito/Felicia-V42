import moment from 'moment-timezone'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let bcbg = 'https://telegra.ph/file/6726375e0308e920330d5.jpg'
    conn.send3ButtonLoc(m.chat, bcbg, wm, `*TAG-ALL*\n\n${text ? `${text}\n` : ''}\n` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n` + '\n','š šš”šØ', '.menu', 'š¢šŖš”šš„', '.owner', `\nAq suka ma owner botny`, '.huuu', null,
 /*let m.reply(`${text ? `${text}\n` : ''}āāć Tag All ć\n` + users.map(v => 'āā¦ā @' + v.replace(/@.+/, '')).join`\n` + '\nāāāāā', null, */{
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
