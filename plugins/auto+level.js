const rewards = {
  exp: 100000,
  money: 199999,
  potion: 9,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `*Anda Telah Mengklaim Klaim Harian Ini*\n*Tunggu Selama* *_${((user.lastclaim + cooldown) - new Date()).toTimeString()}_*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'Tes Auto+XP', text.trim(), null, ['Own', '.owner'],m)
  user.lastclaim = new Date * 1
}
handler.help = ['autoxp']
handler.tags = ['xp']
handler.premium = true
handler.command = /^(xpx)$/i
handler.register = true
handler.cooldown = cooldown

export default handler