exports.run = {
   usage: ['sc'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      if (command == 'sc') {
         let rows = [{
            title: 'Coburator Bot',
            rowId: `${isPrefix}tqto`,
            description: `Partner Bot WhatsApp`
         }]
         await client.sendList(m.chat, '', info(), '© SiestaBOT', 'Tap!', rows, m)
      }
   },
   error: false
}

let info = () => {
   return `*❏ S I E S T A - B O T*

Bot ini dibuat menggunakan *NodeJS* dengan bantuan *Baileys* sebagai Whatsapp Web API dan dimodifikasi dari *neoxr-bot (wildan Izzuddin)* dengan penuh cinta oleh Abang Ganteng *Fardan* sehingga membuat botnya semakin tampan.

*❏ INFO BOT*
IG: https://instagram.com/aharenchan
`
}
