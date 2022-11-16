import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*_Berikan Nomor, Tag Atau Balas Pesan Target_*`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `*_Nomor Yang Anda Masukan Salah_*`, m)
  if(number.length > 15) return conn.reply(m.chat, `*_Format Salah_*`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `*_Target Atau Nomor Tidak Ditemukan, Mungkin Sudah Keluar Atau Bukan Anggota Grup Ini_*`, m)
    if(user === m.sender) return conn.reply(m.chat, `*_Tidak Bisa Berpacaran Dengan Diri Sendiri_*`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*_Tidak Bisa Berpacaran Dengan Saya_*`, m)
    let me = m.sender

    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat, `Maaf *@${user.split('@')[0]}* Tidak Sedang Menembak Anda`, m, { contextInfo: { mentionedJid: [user]}})
    }else{
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Selamat Anda Resmi Berpacaran Dengan *@${user.split('@')[0]}*\n\nSemoga Langgeng Dan Bahagia Selalu *@${user.split('@')[0]} 💓 @${me.split('@')[0]}*\nJangan Lupa *ewe*`,m, { contextInfo: { mentionedJid: [user, me]}})
    }
	}	
}
handler.help = ['terima *@tag*']
handler.tags = ['jadian']
handler.command = /^(terima)$/i
handler.group = true
handler.limit = false
handler.fail = null
export default handler
