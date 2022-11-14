import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.contentText)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return m.reply('*_Soal Itu Telah Berakhir_*')
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        if (['.suka', '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.susunkata[id][2]
            await this.sendBut(m.chat, `*_BENAR_* +${this.susunkata[id][2]} XP`, wm, '𝗦𝗨𝗦𝗨𝗡-𝗞𝗔𝗧𝗔', '.susunkata')
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*_DIKIT LAGI_*`)
        else m.reply(`*_SALAH_*`)
    }
    return !0
}
handler.exp = 0

export default handler
