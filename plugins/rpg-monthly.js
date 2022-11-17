const rewards = {
    exp: 20000,
    money: 20000,
    potion: 15,
    mythic: 10,
    legendary: 5
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `*Anda Telah Mengklaim Hadiah Bulanan Ini*\nTunggu *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*CLAIM MONTHLY REWARDS*', text.trim(), null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'], ['𝗠𝗘𝗡𝗨', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i
handler.register = true
handler.limit = 1
handler.cooldown = cooldown

export default handler