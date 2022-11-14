const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekki/i.test(m.quoted.text)) return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki)) return m.reply('*_Soal Itu Telah Berakhir_*')
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            await this.sendButton(m.chat, `*_BENAR_*\n+${this.tekateki[id][2]} XP`, wm, { 'button[0]': '𝗧𝗘𝗞𝗔-𝗧𝗘𝗞𝗜', 'row[0]': '.tekateki' }, m)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*_DIKIT LAGI_*`)
        else m.reply(`*_SALAH_*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler