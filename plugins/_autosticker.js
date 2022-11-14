import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.stickauth, global.stickpack)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: '么 Kitsuneee', 
    title: 'Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    throw stiker.toString()
   
}

handler.customPrefix = /^(hu|huu|huuu|huuuu|huuuuu|y|iy|iya|iyaa|iyh|ya|yaa|ok|oky|oke|okk|felicia|cia|ciaaa|ciaa|bot)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/8f4f2af73ec1fad0cfd55.jpg",//patrick huu
 "https://telegra.ph/file/835d03a30eb124c6c4318.jpg",//anime yntkts
 "https://telegra.ph/file/e5d86e46d2c511e080052.jpg",//windah bocil
 "https://telegra.ph/file/94ab100ede8d348c4c83c.jpg",//patrick bawa minum
 "https://telegra.ph/file/cb8ca37b1bcb402ca956a.jpg",//pak polisi pap tt
 "https://telegra.ph/file/9672ad289285841fdb1cd.jpg",//kucing1
 "https://telegra.ph/file/e6d62c67ed35633fe12cb.jpg",//kacamata
 "https://telegra.ph/file/c6070ad369f71bb2a2b71.jpg",//patrick pembohong
 "https://telegra.ph/file/b031185d0549e32d6d442.jpg",//spongebob FBI
 "https://telegra.ph/file/fe8bfeda2a8eb5c016803.jpg",//mazowski monster inc
 "https://telegra.ph/file/3e43c94a737b4cc663aa3.jpg",//wkwk
 "https://telegra.ph/file/3c7e8e3b658681f432066.jpg",//kucing2
 "https://telegra.ph/file/1ed19c7e963de6b9e5403.jpg",//patrick anak setan
 "https://telegra.ph/file/ddadb2a6905411db9f9e5.jpg",//mazowski 2
 "https://telegra.ph/file/bdeb20643d9e2187e884a.jpg",//hengker
 "https://telegra.ph/file/287c9ee288e8c33746766.jpg",//anjing
 "https://telegra.ph/file/61592f0440dd8d314dd1c.jpg",//bapak bapak lovee
 "https://telegra.ph/file/bc8691c0628af0b933c16.jpg",//abang saleh
 "https://telegra.ph/file/069df3c896a6c528ed877.jpg"//hengker2
]
