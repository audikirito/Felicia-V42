const rewards = {
  exp: 49999,
  money: 99999,
  potion: 8,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `*Anda Telah Mengklaim Hadiah Harian Ini*\nTunggu *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*CLAIM DAILY REWARDS*', text.trim(), null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'], ['𝗪𝗘𝗘𝗞𝗟𝗬', '.weekly']],m)
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp','rpg']
handler.command = /^(daily|claim)$/i
handler.register = true
handler.cooldown = cooldown

export default handler