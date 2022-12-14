import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let namae = conn.getName(m.sender)
const sections = [
{
title: "๐ฆ๐ฌ๐๐ฅ๐๐ง & ๐๐๐ง๐๐ก๐ง๐จ๐ก ๐๐ข๐ง",
rows: 
[{title: "These are the Rules", rowId: '.rules'},
{title: "FAQ", rowId: '.faq'}
]
}
]

const listMessage = {
  text: `\n*- Wajib Nama & Umur Asli*\n*- Mendaftar = Setuju S&K Bot*`,
  footer: `*Format: #daftar namamu.umurmu*\n*Contoh: #daftar Keiii.17*`,
  title: "*HOW TO REGISTER ๐*",
  buttonText: "๐ฅ๐จ๐๐",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*Sudah Terdaftar ๐*\n\nIngin Daftar Ulang?\n*${usedPrefix}unreg sn*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*Nama Tidak Boleh Kosong (Alphanumeric)*'
  if (!age) throw '*Umur Tidak Boleh Kosong (Angka)*'
  age = parseInt(age)
  if (age > 20) throw '*Umur Haruslah Asli*'
  if (age < 12) throw '*Umur Haruslah Asli*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
*REGISTRATION INFO ๐*

*ษดแดแดแด:* ${name}
*แดษขแด:* ${age} สแดแดสs
*sษด:* ${sn}

*๐ Data Terlindungi*

*Wajib Bergabung:*
*_https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa_*
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'๐ฅ ๐ ๐ ๐ ๐ฆ ๐ง ๐ ๐ฅ',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/b167c9d0e1b6bd7825949.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'๐?๐๐ก๐จ'},'type':1},
{'buttonId':'.owner','buttonText':{'displayText':'๐ข๐ช๐ก๐๐ฅ'},'type':1}
],
'headerType':6}
await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
