import fetch from 'node-fetch'
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} stikerinbot`
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    let str = json.items.map((repo, index) => {
        return `>      「 ${ 1 + index } 」       <
*Repo Name:* ${repo.name}
*By:* ${repo.owner.login}
*Forked:* ${repo.fork ? 'True' : 'False'}
*Private:* ${repo.private ? 'True': 'False'}

➔ *Created On:* ${formatDate(repo.created_at)}
➔ *Last Update On:* ${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
*❗ Issue:* ${repo.open_issues} ${repo.description ? `
*📚 Description:*
${repo.description}` : ''}

*⑂ Clone:*
*_$ git clone ${repo.clone_url}_*
`.trim()
    }).join('\n— — — — — — — — — — — — — —\n')
    conn.sendHydrated(m.chat, `*${htki} ɢɪᴛʜᴜʙ sᴇᴀʀᴄʜ ${htka}*\n` + str, botdate, null, json.items.map((repo, index) => { return `${repo.html_url}` }), ['[ 1 ] ʟ ɪ ɴ ᴋ', '[ 2 ] ʟ ɪ ɴ ᴋ', '[ 3 ] ʟ ɪ ɴ ᴋ'], null,null, [[null,null],[null,null],[null,null]],m)
}
handler.help = ['githubsearch'].map(v => v + ' <pencarian>')
handler.tags = ['internet','downloader']
handler.register = true
handler.limit = 1
handler.command = /^g(ithub|h)s(earch)?$/i

export default handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}

