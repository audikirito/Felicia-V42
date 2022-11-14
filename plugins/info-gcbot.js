import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa'
         let caption = `𝗙𝗲𝗹𝗶𝗰𝗶𝗮 𝗕𝗼𝘁 𝗙𝗮𝗻 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆\n*https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa*\n`
         await conn.sendButtonDoc(m.chat, caption, wm, '𝗢𝗪𝗡𝗘𝗥', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: '𝗠𝘆 𝗚𝗿𝗼𝘂𝗽 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹', 
               body: '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['gcbot','gc']
handler.tags = ['info']
handler.command = /^gcbot|gc$/i
export default handler