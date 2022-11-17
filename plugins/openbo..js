import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 

    try { 

    	let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
        let __timers = (new Date - global.db.data.users[m.sender].lastob)

        let _timers = (3600000 - __timers) 

        let timers = clockString(_timers)

        if (global.db.data.users[m.sender].health > 99) {

            if (new Date - global.db.data.users[m.sender].lastob > 3600000) {


            let _health = `${Math.floor(Math.random() * 199)}`.trim()
            let health = (_health * 1)
            let uang = `${Math.floor(Math.random() * 200000)}`.trim() 
            let str = `

            
*「 OPEN BO 」*\n\nKamu Melakukan OPEN Bo Di ${pickRandom(['Federasi Jura Tempest', 'Desa Konoha', 'Isekai', '2D Dimension', '4D Dimension', 'Kuburan Mantan', 'Rumah Mantan', 'Pernikahan Mantan', 'OPM Verse', 'AOT Verse', 'OP Verse', 'Tensura Verse', 'DB Verse', 'BC Verse', 'Japan', 'DS Verse', 'Kamar Anya','Kamar Maple','Israel','United States of America','Russia'])}

Stamina Kamu Berkuras ${health * 1}%

Bayaran:
 - Money ${uang} 💵

`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 600000)


            setTimeout(() => {

                   m.reply(`*Dia menyewa kamu selama ${pickRandom(['1 Menit', '10 Menit', '1 Jam', '10 Jam', '1 Hari', '1 Minggu', '1 Bulan', '1 Tahun', '5 Jam', '10 Hari', 'Sampai mati', 'Dompet kosong'])} ⏳*`)

                  }, 70000)

            setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Akan jadi pelanggan kamu*`)

                  }, 62000)

             setTimeout(() => {

                   m.reply('*Kamu mandi dulu sebelum open bo*')

                  }, 1000)

             setTimeout(() => {

                   m.reply('*Mencari pelanggan 🔎*')

                  }, 15000)

             setTimeout(() => {

                   m.reply('*Berhasil menemukan pelanggan 🔍*')

                  }, 60000)

             setTimeout(() => {

                   m.reply('*Operasi open bo akan dimulai*')

                  }, 80000)

              setTimeout(() => {

                   m.reply(`*Kamu melakukan gaya ${pickRandom(['Woman on top', 'Doggy style', 'Duduk mendekap', 'Misionaris', 'Spooning', 'Woman on Top', 'The Rider', 'The Seduction', 'The Close-Up', 'Magic Bullet','Sexy Spoons','The Rider','Woman on Top'])} sampai clot*`)

                  }, 240000)

             setTimeout(() => {

                   m.reply('*Kamu sudah sampai dipertengahan waktu ⏳*')

                  }, 300000)

 

             setTimeout(() => {

                   m.reply('*Bentar lagi selesai kak😌*')

                  }, 480000)

             setTimeout(() => {

                   m.reply(`*Bayaran kamu kurang karena kamu ${pickRandom(['Kurang montok', 'kurang pink', 'Tidak sesuai selera', 'Kena gigi', 'Longgar', 'ngegay', 'Ngelwsby', 'orang yang suka pakai emoji "🤓"'])}*`)

                  }, 570000)

					

            global.db.data.users[m.sender].health -= health * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].lastob = new Date * 1
            } else conn.reply(m.chat, `Anda Sudah Open Bo Dan Kelelahan, Silahkan Tunggu Selama *${timers}*`, m)
        } else conn.reply(m.chat, 'Minimal 100 Health Untuk Bisa Open Bo, Silahkan Beli Dan Gunakan Potion Untuk Menambah Health Dengan Cara\n\nMembeli\n • *' + usedPrefix + 'buy potion jumlah*\nMenggunakan\n • ' + usedPrefix + 'heal', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['openbo']

handler.tags = ['rpg']

handler.command = /^(openbo)$/i

handler.limit = 2

handler.group = true

handler.fail = null



export default handler



function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}



function clockString(ms) {

  let h = Math.floor(ms / 3600000)

  let m = Math.floor(ms / 60000) % 60

  let s = Math.floor(ms / 1000) % 60

  console.log({ms,h,m,s})

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

} 