import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Developer Bot 👑`, `📞 Dont Call Me`, `⁨ajaalam13@gmail.com`, `🇯🇵 Japan`, `https://www.tiktok.com/@onlyonegreat`, `Need Partner`],
    [`${nomorown2}`, `${await conn.getName(nomorown2+'@s.whatsapp.net')}`, `Owner Bot 👑`, `📞 Dont Call Me`, `⁨Nothing`, `🇮🇩 Indonesia`, `-`, `Nothing`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Bot Whatsapp 🤖`, `📞 Dont Spam/Call Me`, `Nothing`, `🇮🇩 Indonesia`, `-`, `Dont Forget To Donate`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `*👋 Haiii Kak @${m.sender.split(`@`)[0]}*\nItu Nomor Dev & Ownku Kak...`, wm, '𝗠𝗘𝗡𝗨', '.menu', '𝗗𝗢𝗡𝗔𝗧𝗘', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.register = true
handler.command = /^(owner2|pengembang2|creator2)$/i

export default handler
