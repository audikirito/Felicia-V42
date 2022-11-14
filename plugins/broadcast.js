import moment from 'moment-timezone'

let handler  = async (m, { conn, text }) => {
//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  let chats = Object.keys(await conn.chats)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
  conn.reply(m.chat, `Mengirim Broadcast Ke ${chats.length} Chat ${chats.length} `, m)

  for (let id of chats) {
let bcbg = `${pickRandom(['https://telegra.ph/file/e9a1717a64d674bee18f1.jpg', 'https://telegra.ph/file/9e0a2f056a6e2609be3d1.jpg','https://telegra.ph/file/b5fd44a77c2b57b0ed28e.jpg','https://telegra.ph/file/738d2068f73732ea3d4ea.jpg','https://telegra.ph/file/025c1bb10fb463604c1f9.jpg','https://telegra.ph/file/3d3daed71fa0e53cf8f01.jpg','https://telegra.ph/file/5ef6dd1cf109b755ee91b.jpg','https://telegra.ph/file/572778c2b0f04b49d3ae3.jpg','https://telegra.ph/file/35afa61c9dca22a73254f.jpg'])}`

       await conn.delay(1500)

       conn.send3ButtonImg(id, bcbg, `*${global.namebot} BROADCAST*\n`,`

${pesan}

`,
   '𝗠𝗘𝗡𝗨','.menu',
     '𝗢𝗪𝗡𝗘𝗥','.owner',
       '𝗗𝗢𝗡𝗔𝗧𝗘','.donasi'
       )

     }

  m.reply(`Suksess Broadcast Ke ${chats.length} `)

}

handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }