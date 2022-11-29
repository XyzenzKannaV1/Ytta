exports.run = {
   usage: ['tqto', 'thanksto'],
   async: async (m, {
      client
   }) => {
      client.sendMessageModify(m.chat, info(), m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/321926e01f54c3d9a2886.jpg'),
            url: global.db.setting.link
            })         
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `*BIG THANKS TO*

➠ wildan Izzuddin  

➠ Fardan Dep

➠ acuy

➠ mel       

➠ adara cantik

➠ aprildv 

➠ DiaryNikiiAll

➠ Revan

➠ Ai Aharen

*ALL CREATOR BOT*`
}
