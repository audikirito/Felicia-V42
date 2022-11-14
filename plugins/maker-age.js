import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let js = await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=KitsuneOFC&img=${encodeURIComponent(url)}`)
    let has = await js.json()
    await m.reply('*_Hasil Deteksi Usia Dari Gambar Tersebut Adalah ' + has.result + ' Tahun_*')
    
}

handler.help = ['agedetect (caption|reply media)']
handler.tags = ['maker']
handler.command = /^(agedetect|usia)$/i
handler.register = true
handler.limit = 1
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
