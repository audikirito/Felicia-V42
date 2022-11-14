let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*BANK ${user.registered ? user.name : conn.getName(m.sender)}*

💳 Atm: *${user.atm > 0 ? 'Level ' + user.atm : '✖️'}*
🏛️ Bank: *${user.bank}/${user.fullatm}*
💵 Money: *${user.money}*
🤖 Robo: *${user.robo > 0 ? 'Level ' + user.robo : '✖️'}*
🌟 Status: *${user.premiumTime > 0 ? 'Premium' : 'Free'}*
📑 Registered: *${user.registered ? 'Yes':'No'}*

`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/14c3aa9857b7e2d8dbff6.jpg', [`𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i
handler.register = true

export default handler