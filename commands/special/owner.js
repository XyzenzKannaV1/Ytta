exports.run = {
   usage: ['owner', 'owners'],
   async: async (m, {
      client,
      command
   }) => {
      // if (command == 'owner') return client.reply(m.chat, `Interkasi owner dengan user via WhatsApp sudah tidak tersedia lagi, jika ingin upgrade premium atau ada hal penting lainnya silahkan kirim pesan melalui email dengan subjek *"MINT"*\n\n✉️ : contact@ai.my.id`, m)
      if (command == 'owner') {
         const contact = [{
            name: 'Kemii',
            number: global.owner,
            about: 'Owner Siesta Bot'
         }]
         const msg = await client.sendContact(m.chat, contact, m)
         await client.reply(m.chat, `Save Kak Hehehe😋`, msg)
      }
      // if (command == 'owners') return client.sendContactArr(m.chat, global.db.setting.owners, m)
   },
   error: false,
   cache: true,
   location: __filename
}
