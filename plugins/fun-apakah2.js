let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['100% Pasti Bisa','Iya Banget','Iya','Iya Mungkin','Mungkin Saja','Mungkin','Kurang Tau','YTTA','Gak Tau','Tidak Mungkin','Tidak Akan','Mustahil','Mimpi? Bangun','Menghayal','G','Y','O'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^apakah$/i

export default handler
