//   •-- MADE BY --•
//   | Letta - Sama && Papah-Chan ! 💗🐰
//   •-------------•
// CREDITS ! JANGAN DIUBAH, JANGAN DIHAPUS !!
// NOTE : UBAH APIKEY DI CONFIG.JS

//------ FUNCTION & MODULE
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
   
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'

//---------------------------------
let handler  = async (m, { conn, command, args, usedPrefix, DevMode, isPrems }) => {
	
	// ------- OTHER ------
  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------

//---------------------SOURCE

//> Default
let res = 'https://api.lolhuman.xyz/api/random/nsfw/'
let api = '?apikey=KitsuneOFC'

//> Lolhuman
let resl = 'https://api.lolhuman.xyz/api/random2/'
let apil = '?apikey=KitsuneOFC'

//> Xteam
let xres = 'https://api.xteam.xyz/randomimage/'
let xapi = '?APIKEY=ebb6251cc00f9c63'
//--------------------------------

// ••••••••••••••••• OPTIONS •••••••••••

// > Example :
// OPTIONS
// • false = Free
// • true = premium

let ahegao = true
let anal = true
let animearmpits = true
let animebooty = true
let animefeets = true
let animethighss = true
let biganimetiddies = true
let ass = true
let blowjob = true
let cums = true
let classic = true
let chiisaihentai = true
let ecchi = true
let ero = true
let erokemo = true
let erofeet = true
let erogirl = true
let holoero = true
let erokitsune = true
let eroneko = true
let eroyuri = true
let feet = true
let feetg = true
let femdom = true
let futanari = true
let girlsolo = true
let hentai = true
let hentai4everyone = true
let holo = true
let jahy = true
let kitsune = true
let keta = true
let kuni = true
let lewdkemo = true
let loli = true
let manga = true
let milf = true
let mstrb = true
let neko = true
let nsfw_avatar = true
let panties = true
let pussy = true
let oppai = true
let spank = true
let tentacles = true
let thighs = true
let tits = true
let trap = true
let uniform = true
let waifu = true
let yaoi = true
let yuri = true

//-------------------------------------

//---------- TEXT -----------
let next = '𝗡𝗘𝗫𝗧'
let fot = botdate
let txtprem = '*_Khusus Premium_*'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `\`\`\`Random Image Nsfw ${args[0] ? args[0].capitalize() : false}\`\`\` `
  let teks = `
`
//---------------------------

//--------- BUTTON SELECTIONS ----------
const sections = [
   {
	title: '𝗡𝗦𝗙𝗪 𝗢𝗣𝗧𝗜𝗢𝗡𝗦',
	rows: [
	{title: `${(ch == true ? false : ahegao) == true ? p : f}` + "Ahegao", rowId: ".nsfw ahegao"},
	{title: `${(ch == true ? false : anal) == true ? p:f}` + "Anal", rowId: ".nsfw anal"},
	{title: `${(ch == true ? false : animearmpits) == true ? p:f}` + "Anime Arm Pits", rowId: ".nsfw animearmpits"},
	{title: `${(ch == true ? false : animebooty) == true ? p:f}` + "Anime Booty", rowId: ".nsfw animebooty"},
	{title: `${(ch == true ? false : animefeets) == true ? p:f}` + "Anime Feets", rowId: ".nsfw animefeets"},
	{title: `${(ch == true ? false : animethighss) == true ? p:f}` + "Anime Thighss", rowId: ".nsfw animethighss"},
	{title: `${(ch == true ? false : biganimetiddies) == true ? p:f}` + "Big Anime Tiddies", rowId: ".nsfw biganimetiddies"},
	{title: `${(ch == true ? false : ass) == true ? p:f}` + "Ass", rowId: ".nsfw ass"},
	{title: `${(ch == true ? false : blowjob) == true ? p:f}` + "BlowJob", rowId: ".nsfw blowjob"},
	{title: `${(ch == true ? false : cums) == true ? p:f}` + "Cumsluts", rowId: ".nsfw cums"},
	{title: `${(ch == true ? false : classic) == true ? p:f}` + "Classic", rowId: ".nsfw classic"},
	{title: `${(ch == true ? false : chiisaihentai) == true ? p:f}` + "Chiisai Hentai", rowId: ".nsfw chiisaihentai"},
	{title: `${(ch == true ? false : ecchi) == true ? p:f}` + "Ecchi", rowId: ".nsfw ecchi"},
	{title: `${(ch == true ? false : ero) == true ? p:f}` + "Ero", rowId: ".nsfw ero"},
	{title: `${(ch == true ? false : erokemo) == true ? p:f}` + "Ero Kemo", rowId: ".nsfw erokemo"},
    {title: `${(ch == true ? false : erofeet) == true ? p:f}` + "Ero Feet", rowId: ".nsfw erofeet"},
	{title: `${(ch == true ? false : erogirl) == true ? p:f}` + "Ero Girl", rowId: ".nsfw erogirl"},
	{title: `${(ch == true ? false : holoero) == true ? p:f}` + "Ero Holo", rowId: ".nsfw holoero"},
    {title: `${(ch == true ? false : erokitsune) == true ? p:f}` + "Ero Kitsune", rowId: ".nsfw erokitsune"},
    {title: `${(ch == true ? false : eroneko) == true ? p:f}` + "Ero Neko", rowId: ".nsfw eroneko"},
    {title: `${(ch == true ? false : eroyuri) == true ? p:f}` + "Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${(ch == true ? false : feet) == true ? p:f}` + "Feet", rowId: ".nsfw feet"},
	{title: `${(ch == true ? false : feetg) == true ? p:f}` + "Feetg", rowId: ".nsfw feetg"},
	{title: `${(ch == true ? false : femdom) == true ? p:f}` + "Femdom", rowId: ".nsfw femdom"},
	{title: `${(ch == true ? false : futanari) == true ? p:f}` + "Futanari", rowId: ".nsfw futanari"},
    {title: `${(ch == true ? false : girlsolo) == true ? p:f}` + "Girl Solo", rowId: ".nsfw girlsolo"},
	{title: `${(ch == true ? false : hentai) == true ? p:f}` + "Hentai", rowId: ".nsfw hentai"},
	{title: `${(ch == true ? false : hentai4everyone) == true ? p:f}` + "Hentai 4Everyone", rowId: ".nsfw hentai4everyone"},
	{title: `${(ch == true ? false : holo) == true ? p:f}` + "Holo", rowId: ".nsfw holo"},
	{title: `${(ch == true ? false : jahy) == true ? p:f}` + "Jahy", rowId: ".nsfw jahy"},
    {title: `${(ch == true ? false : kitsune) == true ? p:f}` + "Kitsune", rowId: ".nsfw kitsune"},
    {title: `${(ch == true ? false : keta) == true ? p:f}` + "Keta", rowId: ".nsfw keta"},
    {title: `${(ch == true ? false : kuni) == true ? p:f}` + "Kuni", rowId: ".nsfw kuni"},
	{title: `${(ch == true ? false : loli) == true ? p:f}` + "Loli", rowId: ".nsfw loli"},
	{title: `${(ch == true ? false : lewdkemo) == true ? p:f}` + "Lewd Kemo", rowId: ".nsfw lewdkemo"},
	{title: `${(ch == true ? false : manga) == true ? p:f}` + "Manga", rowId: ".nsfw manga"},
	{title: `${(ch == true ? false : milf) == true ? p:f}` + "Milf", rowId: ".nsfw milf"},
	{title: `${(ch == true ? false : mstrb) == true ? p:f}` + "Mstrb", rowId: ".nsfw mstrb"},
	{title: `${(ch == true ? false : neko) == true ? p:f}` + "Neko", rowId: ".nsfw neko"},
	{title: `${(ch == true ? false : nsfw_avatar) == true ? p:f}` + "NSFW Avatar", rowId: ".nsfw nsfw_avatar"},
	{title: `${(ch == true ? false : oppai) == true ? p:f}` + "Oppai", rowId: ".nsfw oppai"},
	{title: `${(ch == true ? false : panties) == true ? p:f}` + "Panties", rowId: ".nsfw panties"},
	{title: `${(ch == true ? false : pussy) == true ? p:f}` + "Pussy", rowId: ".nsfw pussy"},
    {title: `${(ch == true ? false : spank) == true ? p:f}` + "Spank", rowId: ".nsfw spank"},
	{title: `${(ch == true ? false : tentacles) == true ? p:f}` + "Tentacles", rowId: ".nsfw tentacles"},
	{title: `${(ch == true ? false : thighs) == true ? p:f}` + "Thighs", rowId: ".nsfw thighs"},
    {title: `${(ch == true ? false : tits) == true ? p:f}` + "Tits", rowId: ".nsfw tits"},
	{title: `${(ch == true ? false : trap) == true ? p:f}` + "Trap", rowId: ".nsfw trap"},
	{title: `${(ch == true ? false : uniform) == true ? p:f}` + "Uniform", rowId: ".nsfw uniform"},
	{title: `${(ch == true ? false : waifu) == true ? p:f}` + "Waifu", rowId: ".nsfw waifu"},
	{title: `${(ch == true ? false : yaoi) == true ? p:f}` + "Yaoi", rowId: ".nsfw yaoi"},
	{title: `${(ch == true ? false : yuri) == true ? p:f}` + "Yuri", rowId: ".nsfw yuri"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: '*ICON INFORMATION*\n*🅟 = Premium*\n*Ⓕ = Free*\n',
  title: `*NOT SAFE FOR WORK*`,
  buttonText: "𝗖𝗛𝗢𝗜𝗖𝗘",
  sections
}
//--------------------------------


//------------ CASE NSFW ! ------------
  try {
    if (/(nsfw|hentai)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
case 'ahegao':
        if ((ch == true ? false : ahegao) == true) { 
	    if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		}
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ahegao' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
          break
          
case 'anal':
         if ((ch == true ? false : anal) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
         }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'anal' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
           break
            
case 'ass':
         if ((ch == true ? false : ass) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ass' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'animearmpits':
         if ((ch == true ? false : animearmpits) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'animearmpits' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'animebooty':
         if ((ch == true ? false : animebooty) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'animebooty' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'animefeets':
         if ((ch == true ? false : animefeets) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'animefeets' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'animethighss':
         if ((ch == true ? false : animethighss) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'animethighss' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
    
case 'biganimetiddies':
         if ((ch == true ? false : biganimetiddies) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'biganimetiddies' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
         
case 'blowjob':
         if ((ch == true ? false : blowjob) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'blowjob' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'cums':
         if ((ch == true ? false : cums) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'cum' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
case 'chiisaihentai':
         if ((ch == true ? false : chiisaihentai) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'chiisaihentai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'classic':
         if ((ch == true ? false : classic) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'classic' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ecchi':
         if ((ch == true ? false : ecchi) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ecchi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ero':
         if ((ch == true ? false : ero) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'ero' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'erokemo':
         if ((ch == true ? false : erokemo) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'erokemo' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erofeet':
         if ((ch == true ? false : eroFeet) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erogirl':
         if ((ch == true ? false : erogirl) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'lewdanimegirls' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holoero':
         if ((ch == true ? false : holoero) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'holo' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erokitsune':
         if ((ch == true ? false : erokitsune) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'erok' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroneko':
         if ((ch == true ? false : eroneko) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'eron' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroyuri':
         if ((ch == true ? false : eroyuri) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'eroYuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'feet':
         if ((ch == true ? false : feet) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'feetg':
         if ((ch == true ? false : feetg) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'feetg' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'femdom':
         if ((ch == true ? false : femdom) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'femdom' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'futanari':
         if ((ch == true ? false : futanari ) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'futanari' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'girlsolo':
         if ((ch == true ? false : girlsolo) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'solo' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'hentai':
         if ((ch == true ? false : hentai) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hentai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'hentai4everyone':
         if ((ch == true ? false : hentai4everyone) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hentai4everyone' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holo':
         if ((ch == true ? false : holo) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hololewd' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'jahy':
         if ((ch == true ? false : jahy) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'jahy' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kitsune':
         if ((ch == true ? false : kitsune) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'kitsune' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'keta':
         if ((ch == true ? false : keta) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'keta' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kuni':
         if ((ch == true ? false : kuni) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'kuni' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'loli':
         if ((ch == true ? false : loli) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'loli' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'lewdkemo':
         if ((ch == true ? false : lewdkemo) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'lewdkemo' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'manga':
         if ((ch == true ? false : manga) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'manga' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'milf':
         if ((ch == true ? false : milf) == true) { 
         if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'milf' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'mstrb':
         if ((ch == true ? false : mstrb) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'mstrb' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'neko':
         if ((ch == true ? false : neko) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'neko' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'nsfw_avatar':
         if ((ch == true ? false : nsfw_avatar) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'nsfw_avatar' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'oppai':
         if ((ch == true ? false : oppai) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'sideoppai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'panties':
         if ((ch == true ? false : panties) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'panties' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'pussy':
         if ((ch == true ? false : pussy) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'pussy' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'spank':
         if ((ch == true ? false : spank) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'spank' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tentacles':
         if ((ch == true ? false : tentacles) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'tentacles' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tits':
         if ((ch == true ? false : tits) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'tits' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'thighs':
         if ((ch == true ? false : thighs) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'thighs' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'trap':
         if ((ch == true ? false : trap) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          conn.sendButton(m.chat, tekk, fot, tr.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'uniform':
         if ((ch == true ? false : uniform) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'uniform' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'waifu':
         if ((ch == true ? false : waifu) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          conn.sendButton(m.chat, tekk, fot, wf.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yaoi':
         if ((ch == true ? false : yaoi) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yaoi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yuri':
         if ((ch == true ? false : yuri) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['𝗣𝗥𝗘𝗠𝗜𝗨𝗠', '.premium'],['𝗢𝗪𝗡𝗘𝗥', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
default:
         return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
        } else if (/hentong/i.test(command)) {
               const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
               switch (_type) {
           case 'A':
               break
           case '':
               break
default:
          return conn.sendButton( m.chat, caption, fot, null, [`⋮☰ Menu`, `.menu`], m)
         }
        }
       } catch (err) {
                      m.reply("Error\n\n\n" + err.stack)
      }
//-----------------------------

}

handler.help = ['nsfw <type>', 'hentai <type>']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw|hentai)/i
handler.register = true
handler.limit = 1
export default handler
