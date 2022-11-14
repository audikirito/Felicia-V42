const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teki/i.test(m.quoted.text)) return !0
    this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
    if (!(id in this.tebakkimia)) return m.reply('*_Soal Itu Telah Berakhir_*')
    if (m.quoted.id == this.tebakkimia[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.unsur.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkimia[id][2]
            await this.sendButton(m.chat, `*_BENAR_*\n+${this.tebakkimia[id][2]} XP`, '⌬ Felicia-MD', { 'button[0]': '𝗧𝗘𝗕𝗔𝗞-𝗞𝗜𝗠𝗜𝗔', 'row[0]': '.tebakkimia' }, m)
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.unsur.toLowerCase().trim()) >= threshold) m.reply(`*_DIKIT LAGI_*`)
        else m.reply(`*_SALAH_*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler