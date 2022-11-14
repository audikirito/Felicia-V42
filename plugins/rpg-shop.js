const items = {
    buy: {
        limit: {
            money: 4999
        },
        potion: {
            money: 10000,
        },
        trash: {
            money: 100,
        },
        wood: {
            money: 19000
        },
        rock: {
            money: 18000
        },
        string: {
            money: 15000
        },
        iron: { 
        	money: 23000
        }
    },
    sell: {
        potion: {
            money: 3300,
        },
        trash: {
            money: 10
        },
        wood: {
            money: 6300
        },
        rock: {
            money: 5400
        },
        string: {
            money: 4500
        },
        iron: {
            money: 7600
        },
        gold: {
            money: 9000
        },
        diamond: {
            money: 9000
        },
        emerald: {
            money: 15000
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