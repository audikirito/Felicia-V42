const items = {
    buy: {
        limit: {
            money: 4999
        },
        potion: {
            money: 10000
        },
        trash: {
            money: 100
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
        botol: {
            money: 400
        },
        kaleng: {
            money: 500
        },
        kardus: {
            money: 500
        },
        pisang: {
            money: 1000
        },
        mangga: {
            money: 1500           
        },
        jeruk: {
            money: 3000
        },
        anggur: {
            money: 3500
        },
        apel: {
            money: 4000
        },
        bibitpisang: {
            money: 250
        },
        bibitmangga: {
            money: 250
        },
        bibitjeruk: { 
        	money: 250
        },
        bibitanggur: {
            money: 250
        },
        bibitapel: {
            money: 250
        },
        gardenboxs: {
            money: 350000
        },
        pet: {
            money: 100000
        },
        aqua: {
            money: 5000
        },
        pancingan: {
            money: 300000
        },
        umpan: {
            money: 1000
       }
    },
    sell: {
        limit: {
            money: 499
        },
        potion: {
            money: 1000
        },
        trash: {
            money: 10
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
            money: 5000
        },
        diamond: {
            money: 6000
        },
        emerald: {
            money: 9000
        },
        common: {
            money: 500
        },
        uncommon: {
            money: 700
        },
        mythic: {
            money: 900
        },
        legendary: {
            money: 1200
        }
        botol: {
            money: 100
        },
        kaleng: {
            money: 100
        },
        kardus: {
            money: 100
        },
        pisang: {
            money: 100
        },
        mangga: {
            money: 150        
        },
        jeruk: {
            money: 300
        },
        anggur: {
            money: 350
        },
        apel: {
            money: 400
        },
        bibitpisang: {
            money: 25
        },
        bibitmangga: {
            money: 25
        },
        bibitjeruk: { 
        	money: 25
        },
        bibitanggur: {
            money: 25
        },
        bibitapel: {
            money: 25
        },
        gardenboxs: {
            money: 35000
        },
        pet: {
            money: 10000
        },
        aqua: {
            money: 500
        },
        hiu: {
            money: 2000        
        },
        ikan: {
            money: 2000
        },
        dory: {
            money: 2000
        },
        orca: {
            money: 2000
        },
        paus: {
            money: 2000
        },
        cumi: {
            money: 2000
        },
        gurita: { 
        	money: 2000
        },
        buntal: {
            money: 2000
        },
        udang: {
            money: 2000
        },
        lumba: {
            money: 2000
        },
        lobster: {
            money: 2000
        }
        kepiting: {
            money: 2000
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