let handler = async m => m.reply(`
*ANIME WEBSITE COLLECTION 📁*

*LEGAL*
• *_https://www.crunchyroll.com/_*
• *_https://wetv.vip/id_*
• *_https://www.iq.com/?lang=id_id_*
• *_https://id.e-muse.com.tw/_*
• *_https://youtube.com/c/AniOneAsia_*
• *_https://www.netflix.com/id/_*
• *_https://www.funimation.com/_*
• *_https://m.vidio.com/_*
• *_https://genflix.co.id/_*
• *_https://www.bilibili.tv/id_*

*ILEGAL*
• *_https://185.224.82.193/_*
• *_https://neonime.is/_*
• *_https://riie.one/_*
• *_https://animeisme.online/_*
• *_https://65.108.132.145/#_*
• *_https://otakudesu.bid/_*
• *_https://m.imdb.com/list/ls021260570/_*
• *_https://194.163.183.129/_*
• *_https://anibatch.anibatch.moe/_*
• *_https://185.224.82.193/_*
• *_https://anoboy.lol/_*
• *_https://mangaku.vip/_*
• *_https://lk21official.art/_*
• *_https://animepos.com.cutestat.com/_*
• *_https://kotakanimeid.com/_*
• *_https://nontonanimeid.click/animenonton-tv/_*
• *_https://awsubs.sbs/_*

`.trim()) // Tambah sendiri kalo mau
handler.help = ['animelink']
handler.tags = ['anime']
handler.command = /^animelink$/i
handler.register = true
handler.limit = 2
export default handler 
