let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *DEV & OWN* ${htka}

*Dev Kitsune*
@${nomorown.split`@`[0]}

*Own Avri*
@${nomorown2.split`@`[0]}

`

//------------ BIO
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `${htki} *BIODATA OWN* ${htka}
*๐ฌ Nama:* 
*โ๏ธ Nama RL:* 
*โง Gender:* 
*๐ฟ Agama:* 
*๐ Tanggal:* 
*๐๏ธ Umur:* 
*๐ซ Kelas:* 
*โค๏ธ Hobby:* 
*โ๏ธ Sifat:* 
*๐บ๏ธ Tinggal:* 
*โ๏ธ Waifu:* 

*๐ท Instagram:*
*โถ๏ธ You Tube:*
*๐ต Tik Tok:*
*๐ Github:*
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA DEV* ${htka}
*๐ฌ Nama:* Kitsune
*โ๏ธ Nama RL:* Private
*โง Gender:* Private
*๐ฟ Agama:* Islam
*๐ Ultah:* 12 September
*๐๏ธ Umur:* 17
*๐ซ Kelas:* XI
*โค๏ธ Hobby:* Coding
*โ๏ธ Sifat:* Pendiam
*๐บ๏ธ Tinggal:* Kaltim
*โ๏ธ Waifu:* Private

*๐ท Instagram:* -
*โถ๏ธ You Tube:* -
*๐ต Tik Tok:* tiktok.com/@onlyonegreat
*๐ Github:* -
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = '*_Silahkan Pilih Opsi Dibawah_*'
const sections = [
   {
	title: `OWNER โโโโโโโโโยทโข`,
	rows: [
	{title: "๐ก๐ผ๐บ๐ผ๐ฟ ๐๐ฒ๐ & ๐ข๐๐ป", rowId: ".owner2"},
	{title: "๐๐ถ๐ผ๐ฑ๐ฎ๐๐ฎ ๐๐ฒ๐๐ฒ๐น๐ผ๐ฝ๐ฒ๐ฟ", rowId: ".owner bio"},
	{title: "๐๐ถ๐ผ๐ฑ๐ฎ๐๐ฎ ๐ข๐๐ป๐ฒ๐ฟ", rowId: ".owner bio2"},
	]
  }
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *DEV & OWN* ${htka}`,
  buttonText: "๐ฆ๐๐๐๐๐ง ๐๐๐ฅ๐",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio,  wm, ppown, [
                ['๐ฆ๐๐ช๐ ๐๐ข๐ง', `${usedPrefix}sewa`],
                ['๐?๐๐ก๐จ', `${usedPrefix}menu`]
            ], m)
            break
            case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio2,  wm, ppown2, [
                ['๐ฆ๐๐ช๐ ๐๐ข๐ง', `${usedPrefix}sewa`],
                ['๐?๐๐ก๐จ', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ ๐?๐๐ก๐จ`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator','pengembang']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator|pengembang)/i

export default handler
