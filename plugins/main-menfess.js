import fs from 'fs'
let handler = async (m, { conn, number, text, usedPrefix, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender] 
  
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Fitur Untuk Menfess*\n\n*_Contoh: ${usedPrefix + command} nomor|nama pengirim|pesan_*`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Fitur Untuk Menfess*\n\n*_Contoh: ${usedPrefix + command} nomor|nama pengirim|pesan_*`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw '*Nomer Tidak Terdaftar Di Whatsapp*';
    if (jid == m.sender) throw '*Tidak Bisa Mengirim Pesan Menfess Kediri Sendiri.*'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
 
let id = + new Date
let tek = `Hai Kak *@${data.jid.split('@')[0]}*\n*Kamu Menerima Pesan Menfess*\n`.trim();
let logs = `βοΈ Pesan:\n*${pesan}*`

let ssn = `π€ Dari: *${name}*\nβοΈ Pesan: *${pesan}*\n\n*_Ingin Balas Menfess? #balasmenfess pesanmu_*`
        let imgr = fla.getRandom()
        //Created By AL? Offc
       await conn.send3ButtonDoc(data.jid, tek, ssn, 'π ππ‘π¨', '.menu', 'π’πͺπ‘ππ₯', '.owner', 'ππ₯ππππ§', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/',
    mediaType: 2, 
    description: sgc,
    title: "δΉ Kitsuneee",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc
   }}}).then(() => {
           conn.send3ButtonDoc(m.chat, `*Berhasil Mengirim Pesan Ke @${jid.replace(/@.+/, '')}*`, logs, 'π ππ‘π¨', '.menu', 'π’πͺπ‘ππ₯', '.owner', 'ππ₯ππππ§', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://facebook.com/',
    mediaType: 2, 
    description: sgc,
    title: "δΉ Kitsuneee",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc
   }}})
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    
    }
handler.tags = ['main']
handler.help = ['menfess'].map(v => v + ' <nomor|nama|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true
handler.register = true
handler.limit = 1
export default handler

/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * Jangan lupa bawa udut minimal sukunπΏ
 
 *Nα΄α΄α΄α΄Ι΄Ι’ Nα΄α΄α΄
 *Kα΄Ι΄Ι’ Rα΄α΄α΄α΄α΄ : AΚα΄Ιͺ Lα΄sα΄α΄Ι΄α΄
 *CΚα΄Ι΄Ι΄α΄Κ : AL? Offc
 
 *Minimal Jangan Di Hapos Anj
*/
