let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan Yang Tersedia:\ngunting, kertas, batu\n\nPrize: *10000 Money 💵*\n\n*_Contoh: ${usedPrefix}suit gunting_*`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Hasil: *Seri*\n\n- Kamu: ${text}\n- Bot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 10000
            m.reply(`Hasil: *Kamu Menang +10K*\n\n- Kamu: ${text}\n- Bot: ${astro}`)
        } else {
            m.reply(`Hasil: *Kamu Kalah*\n- Kamu: ${text}\n- Bot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 10000
            m.reply(`Hasil: *Kamu Menang +10K*\n\n- Kamu: ${text}\n- Bot: ${astro}`)
        } else {
            m.reply(`Hasil: *Kamu Kalah*\n- Kamu: ${text}\n- Bot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 10000
            m.reply(`Hasil: *Kamu Menang +10K*\n\n- Kamu: ${text}\n- Bot: ${astro}`)
        } else {
            m.reply(`Hasil: *Kamu Kalah*\n- Kamu: ${text}\n- Bot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.register = true
export default handler
