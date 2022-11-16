import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hgom/i.test(m.quoted.text) || /.*hgom/i.test(m.text))
        return !0
    this.tebakgombal = this.tebakgombal ? this.tebakgombal : {}
    if (!(id in this.tebakgombal))
        return conn.sendButton(m.chat, '*_Soal Itu Telah Berakhir_*', author, null, buttontebakgombal, m)
    if (m.quoted.id == this.tebakgombal[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgombal[id][3])
            delete this.tebakgombal[id]
            return conn.sendButton(m.chat, '*Kok Menyerah?*', author, null, buttontebakgombal, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgombal[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakgombal[id][2]
            conn.sendButton(m.chat, `*_BENAR_*\n+${this.tebakgombal[id][2]} XP`, author, null, buttontebakgombal, m)
            clearTimeout(this.tebakgombal[id][3])
            delete this.tebakgombal[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*_DIKIT LAGI_*`)
        else
            conn.sendButton(m.chat, `*_SALAH_*`, author, null, [
                ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hgom'],
                ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakgombal = [
    ['𝗧𝗘𝗕𝗔𝗞-𝗚𝗢𝗠𝗕𝗔𝗟', '/tebakgombal']
]