let handler = async (m, { conn }) => {
    conn.tebakgombal = conn.tebakgombal ? conn.tebakgombal : {}
    let id = m.chat
    if (!(id in conn.tebakgombal)) throw false
    let json = conn.tebakgombal[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
    ], m)
}
handler.command = /^hgom$/i

handler.limit = true

export default handler