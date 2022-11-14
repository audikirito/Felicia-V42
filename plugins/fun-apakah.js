let handler = async (m) => m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['100% Pasti Bisa','Iya Banget','Iya','Iya Mungkin','Mungkin Saja','Mungkin','Kurang Tau','YTTA','Gak Tau','Tidak Mungkin','Tidak Akan','Mustahil','Mimpi? Bangun','Menghayal','G','Y','O'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i

export default handler
