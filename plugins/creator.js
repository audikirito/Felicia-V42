import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Developer Bot ๐`, `๐ Dont Call Me`, `โจajaalam13@gmail.com`, `๐ฏ๐ต Japan`, `https://www.tiktok.com/@onlyonegreat`, `Need Partner`],
    [`${nomorown2}`, `${await conn.getName(nomorown2+'@s.whatsapp.net')}`, `Owner Bot ๐`, `๐ Dont Call Me`, `โจNothing`, `๐ฎ๐ฉ Indonesia`, `-`, `Nothing`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Bot Whatsapp ๐ค`, `๐ Dont Spam/Call Me`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `-`, `Dont Forget To Donate`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `*๐ Haiii Kak @${m.sender.split(`@`)[0]}*\nItu Nomor Dev & Ownku Kak...`, wm, '๐ ๐๐ก๐จ', '.menu', '๐๐ข๐ก๐๐ง๐', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.register = true
handler.command = /^(owner2|pengembang2|creator2)$/i

export default handler
