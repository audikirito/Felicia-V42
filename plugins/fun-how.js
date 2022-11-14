let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  MEASURING PROPERTIES*\n
  *${text}* Itu *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy','jelek','bijaksana','mandiri','supel','sabar','humoris','kreatif','integritas','kritis','idealis','kejujuran','dermawan','hormat','setia','adil','murahhati','sopan','optimis','tekun','rajin','bisadiandalkan','penyayang','disiplin','bertanggungjawab','berani','percayadiri','tawakal','bersyukur','ceria','sombong','labil','minder','caper','pendendam','prefeksionis','hardtoplease','sensitif','penyendiri','moody','egois','pesinis','bossy','pembangkang','pelit','ambisius'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy|jelek|bijaksana|mandiri|supel|sabar|humoris|kreatif|integritas|kritis|idealis|kejujuran|dermawan|hormat|setia|adil|murahhati|sopan|optimis|tekun|rajin|bisadiandalkan|penyayang|disiplin|bertanggungjawab|berani|percayadiri|tawakal|bersyukur|ceria|sombong|labil|minder|caper|pendendam|prefeksionis|hardtoplease|sensitif|penyendiri|moody|egois|pesinis|bossy|pembangkang|pelit|ambisius)/i
handler.register = true
export default handler