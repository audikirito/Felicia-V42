let handler = async (m, { conn }) => {
    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
    let id = m.chat
    if (!(id in conn.tebakkalimat)) throw false
    let json = conn.tebakkalimat[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
    ], m)
}
handler.command = /^hkal$/i

handler.limit = true

export default handler