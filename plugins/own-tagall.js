import moment from 'moment-timezone'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let bcbg = 'https://telegra.ph/file/f9ee793128e98e36fb29c.jpg'
    conn.send3ButtonLoc(m.chat, bcbg, wm, `${text ? `${text}\n` : ''}*TAG ALL*\n` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n` + '\n','š šš”šØ', '.menu', 'š¢šŖš”šš„', '.owner', `\nlove u owner`, '.huuu', null,
 /*let m.reply(`${text ? `${text}\n` : ''}āāć Tag All ć\n` + users.map(v => 'āā¦ā @' + v.replace(/@.+/, '')).join`\n` + '\nāāāāā', null, */{
        mentions: users
    })
}

handler.help = ['o-tagall']
handler.tags = ['owner']
handler.command = ['o-tagall']
handler.owner = true
handler.group = true
handler.register = true
export default handler
