let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
        'Mungkin Suatu Hari',
        'Tidak Juga',
        'Tidak Keduanya',
        'Kurasa Tidak',
        'Ya',
        'Coba Tanya Lagi',
        'Malas Menjawab',
        'Tidak Tau',
        'Tidak Ada'
    ].getRandom()}."`)
}
handler.help = ['kerang', 'kerangajaib'].map(v => v + ' <teks>')
handler.tags = ['kerang', 'fun']

handler.command = /^(kulit)?kerang(ajaib)?$/i
handler.register = true
export default handler
