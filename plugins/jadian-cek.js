let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Maaf, Nomor yang anda masukan salah!`, m)

  if (!text && !m.quoted){
    var user = m.sender
    var orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "Orang yang kamu balas"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("*_Target Tidak Terdaftar Didalam Database_*")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("*_Target Tidak Terdaftar Didalam Database_*")
  }

  if (global.db.data.users[user].pasangan == "") {
    conn.reply(m.chat, `${orang} Tidak Memiliki Pasangan Dan Tidak Sedang Menembak Siapapun\n\n*_Ketik .tembak @Tag Untuk Menembak Seseorang_*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    conn.reply(m.chat, `${orang} Sedang Menunggu Jawaban Dari *@${global.db.data.users[user].pasangan.split('@')[0]}* Karena Sedang Tidak Diterima Atau Ditolak\n\n*_Ketik ${usedPrefix}ikhlasin Untuk Mengikhlaskan_*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `*${orang}* Sedang Menjalani Hubungan Dengan *@${global.db.data.users[user].pasangan.split('@')[0]}*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }
}
handler.help = ['cekpacar']
handler.tags = ['group','fun']
handler.command = /^(cekpacar)$/i
handler.register = true
export default handler
