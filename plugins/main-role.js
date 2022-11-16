let handler = async (m, { conn, participants }) => {
    m.reply(` *INFO TIER*
    
    'Beginner': 0,
    'E': ?,
    'D': ?,
    'C': ?,
    'B': ?,
    'A': ?,
    'S': ?,
    'S+': ?,
    'SS': ?,
    'SS+': ?,
    'SSR': ?,
    'SSR+': ?,
    'SR': ?,   
    'SR+': ?,
    'IMORTAL': ?
    
*_Level Setiap Tier Akan Terlihat Jika Pemain Sudah Ada Yang Sampai Ditier Tersebut_* 
`) 
   }
handler.help = ['role']
handler.tags = ['main','rpg']
handler.command = /^tier$/i
handler.premium = false
handler.register = true
export default handler