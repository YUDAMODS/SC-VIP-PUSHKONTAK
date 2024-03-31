/* SC THOMZ V8
BASE : HW MODS
RECODE : THOMZ
CREACOT : THOMZ
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "6288294276026"
global.namabot = "Fqrx"
global.botname = "Fqrx-Cruel"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'thomz' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By FqrxDesign"

global.namastore = "Fqrx - Cruel "
global.nodana = "088294276026"
global.nogopay = "-"
global.noovo = "-"
global.shoopepay = "-"
global.qris = "https://tmpfiles.org/dl/4514637/tmp.jpg"

global.domain = 'https://private.thomvelz.my.id' // Isi Domain Lu
global.apikey = 'ptla_KoYJuL9VUVEDa4G3RF3YkwpYMAigGs2h70WXQfv4doB' // Isi Apikey Plta Lu
global.capikey = 'ptlc_7NVmZ4ynvB0KwBAxZId7kW8XSN4j4b25Z0uubiXxRmZ' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   wait: "Pʀᴏsᴇs...",
   success: "Sᴜᴄᴄᴇs...,
   save: "Sᴜᴋsᴇs Sᴀᴠᴇ Nᴏᴍᴏʀ ʕ •ᴥ•ʔ",
   on: "Bᴏᴛ Kᴇᴍʙᴀʟɪ Oɴ ♥︎", 
   off: "Bᴏᴛ Oғғ Kᴀᴋ ಥ_ಥ",
   query: {
       text: "Tᴇᴋsɴʏᴀ Mᴀɴᴀ? ʕ – _ – ʔ",
       link: "Lɪɴᴋɴʏᴀ Mᴀɴᴀ Kᴀᴋ?? ʕ – _ – ʔ",
   },
   error: {
       fitur: "Yᴀʜʜ.. Fɪᴛᴜʀɴʏᴀ Eʀʀᴏʀ ಥ_ಥ, Cʜᴀᴛ Oᴡɴᴇʀ Kᴜ Aᴊᴀ Kᴀᴋ Bɪᴀʀ Dɪ Pᴇʀʙᴀɪᴋɪ",
   },
   only: {
       group: "Mᴀᴀғ Kᴀᴋ, Kʜᴜsᴜs Gʀᴜᴘ (◍•ᴗ•◍)",
       private: "Mᴀᴀғ Kᴀᴋ Iɴɪ Dɪ Gʀᴜᴘ Bᴜᴋᴀɴ Dɪ Pʀɪᴠᴀᴛᴇ (≡^∇^≡)",
       owner: "Kʜᴜsᴜs Oᴡɴᴇʀ Kᴜ Yᴀ Kᴀᴋ (ʘᴗʘ✿)",
       admin: "Kᴀᴍᴜ Bᴜᴋᴀɴ Aᴅᴍɪɴ Gᴀʙɪsᴀ Pᴀᴋᴀɪ Fɪᴛᴜʀ Iɴɪ (•ˋ _ ˊ•)",
       badmin: "Hᴜʜᴜ.. Bᴏᴛ Bᴜᴋᴀɴ Aᴅᴍɪɴ ˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚",
       premium: "Kᴀᴍᴜ Bᴋɴ Pʀᴇᴍɪᴜᴍ, Gɪʜ Uᴘɢʀᴀᴅᴇ Dʟᴜ Bᴇʟɪ Kᴇ Oᴡɴᴇʀ Kᴜ (´-ω-`)",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})