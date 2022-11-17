const items = {
    buy: {
        limit: {
            money: 9999
        },
        potion: {
            money: 10000,
        },
        trash: {
            money: 100,
        },
        wood: {
            money: 8000
        },
        rock: {
            money: 8000
        },
        string: {
            money: 50000
        },
        iron: { 
        	money: 20000
        },
        common: {
            money: 5000
        },
        uncommon: {
            money: 7000
        },
        mythic: {
            money: 9000
        },
        legendary: {
            money: 12000
        }
    },
    sell: {
        potion: {
            money: 1000,
        },
        trash: {
            money: 9
        },
        wood: {
            money: 800
        },
        rock: {
            money: 800
        },
        string: {
            money: 5000
        },
        iron: {
            money: 5000
        },
        gold: {
            money: 8000
        },
        diamond: {
            money: 8000
        },
        emerald: {
            money: 10000
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
*「 ITEM SHOP 」*

*_Format: ${usedPrefix}${command} <crate> <count>_*
*_Contoh: ${usedPrefix}${command} potion 10_*
╭───────⬣  
│ *Item List*
├───────⬣
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `│ *_${global.rpg.emoticon(v)}${v} > ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}_*`.trim()
    }).join('\n')}
╰────────────────⬣
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`*Money Tidak Cukup*\n\n*- Kamu Membutuhkan ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} Money💵_*`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`Kamu Membeli *${total} ${global.rpg.emoticon(item)}${item}*`)
    } else {
        if (user[item] < total) return m.reply(`Kamu Tidak Mempunyai Cukup *${global.rpg.emoticon(item)}${item}* Untuk Dijual, Kamu Hanya Mempunya *${user[item]}* Item`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`Kamu Menjual *${total} ${global.rpg.emoticon(item)}${item}*`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i
handler.register = true
handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}