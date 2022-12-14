import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, args }) => {
    if (!args[0]) throw `*HADIS SEARCH*

*_Contoh 1: ${usedPrefix + command} bukhari 1_*
*_Contog 2: ${usedPrefix + command} abu-daud 1_*

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
    if (!args[1]) throw `*Hadis Yang Keberapa?*\n\n*_Contoh: ${usedPrefix + command} ${args[0]} 1_*`
    try {
        let res = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
        let json = await res.json()
        let { number, arab, id } = json.find(v => v.number == args[1])
        m.reply(`No. ${number}

${arab}

${id}`)
    } catch (e) {
        throw `_*Error!*_`
    }
}
handler.help = ['hadis']
handler.tags = ['quran', 'tools']
handler.command = /^(hadist?)$/i
handler.register = true
export default handler
