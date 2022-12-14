import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '*Fitur Untuk Search Video/Channel Dari YT*\n\n*_Contoh: .yts dj old_*'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š¬ *${v.title}* 
š _${v.url}_
ā³ Duration: ${v.durationH}
š Uploaded ${v.publishedTime}
šļø ${v.view} views
      `.trim()
      case 'channel': return `
ā­āāāāāāāā¢ *CHANNEL*
āš¬ *${v.channelName}* 
āš _${v.url}_
āā¤ļø _${v.subscriberH} Subscriber_
āš„ _*${v.videoCount} Video_
āāāāāāāāā¢
`.trim()
    }
  }).filter(v => v).join('\n\nāāāāāāāāāāāāāāāāāāāāāāāāāāā\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.register = true
handler.limit = 1
export default handler
