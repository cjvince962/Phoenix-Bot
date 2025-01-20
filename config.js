const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
};

const toBool = (x) => (x && (x.toLowerCase() === 'true' || x.toLowerCase() === 'on')) || false;
const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  //__________________________________________________________________________________________________________________________________________
 // For Enabling Commands Like AUTO_STATUS_VIEW Type true For Disabling Type false  
//____________________________________________________________________________________________________________________________________________  
  SESSION_ID: process.env.SESSION_ID || 'creepyBWM-XMD;;;H4sIAAAAAAAAA5VVy46jRhT9lai2do8BgwFLLQVj/MBP/ADbURZlKDDmaarAxqNe5aEoi8yipY6iqDObZBsp+/mF+YfRfIE/IaLdrW7NKx1WpaLq3HPvPffUSxBGLkY9lIP6SxAnbgYJKpYkjxGog0Zq2ygBZWBBAkEdOOND4EYZ3Zibte7Ej11ZGNqETgf+bEpCscsvhSrkhwOV2l+CqzKI07Xvml8AjELI1sS+KPgNWYiksW9ZhK6kesUVgtbh2BEP05o1QnQ7YC/BVYEI3cQNHSXeoAAl0O+hfAzd5Hn08bg1MviwqWiIi2O+t3A0gnIjsyltMIc9o7tsTjUWGbaOn0c/WJuliZbONybmKktuoWH7IIlE19x14KHWsj/qtaaQ9nZz5Uwfu06IrK6FQuKS/Nl1n6u0Gg1HAyHLGu6eMjx9V+m0pWm/1qyt+HUaOKquMbjD0/PnEa81x5uFgiuZcpTH/Ul7HR44aK/70YTHzGZnOhsB7xaoMd9QT4mPkweteP+r7lLgQ6ub8vZhIR72UgtFie4hNteiTovb7mBIoeTYope+8zz6KlULtKqxGwt9re0dPG6vZ91W34q5/k6uTXsL7tDcy7td3PYe6UOSJl9iSS00T422AmamVQbPVgvEbp1Qt6yE1bcVs0PbdC2sutNqJ0p1a10SlpaRjJlE67DSfq81+FWHF3SB2vVyCrmD0kxO2a12eZeRh/KuBer0VRkkyHExSSBxo7DYY6piGUArmyIzQeSuvMBvD+i+7CWmsBGV7XTFEXXrOco63yhZOx6zNqVs+0rq1ybmJSiDOIlMhDGyOi4mUZIPEMbQQRjUv7nrVJF0goKIINW1QB0wHMuzHMcwjFD7Gr/YbyDBMI5fhIiAMrCTKBggUCdJisrg7oJCcQzPSFxDkPkmpVSrsiIJDZnnaUmgGwpbpBicg87cAGECgxjUab7KVymaFeirb8sgRAdy1k+RdZUuA9tNMJmHaexH0HoQ18NPaJpRGpJpHppysUAJqD/ZRoS4oYOLzNIQJubGzZBc5AHqNvQxuioDC2WuiQo8cByqJncxV2aeEdZGYqcXb42hU1RuE4XnIybHiIhC1EXVZtAFW+PQxZqm7AthbXGiuabsKieAohzn0S3ufFZJq/HBlsw4bkXYZVfKnBkOs0WuiyJ3Hs+zBFCCrIcqr6HppfEs8lD4BdyQSQWSDfNVZ+86bKBam/6BofMdvVCe4J6lBeovH+1SjqwCr7lqNQytz4GiW0Wcj9RQZz/WQwiLw+B0/cP16fVfr97f/vP+1Z9vX799/faPd29+PN3e/H66vfnldHtzfbq9+el0e/PzVx9s/na6vfn1w0Pv3nx/uv7u74L3fVMLRhYi0PUxqAN5ZLQyFsvKEPGkv2+3pa4jyY4EHkXwMNTnoRGNhrpvCmxP98RcUytBpRUtD4fBUJ2NGzBJmhVbNPdtzE/Yy0+AgDrgajTfNwRB4DuS6aeRunO6pdFqpcpzsd05jgKfNDlq0hqLXc6olNS502TyyGAHx4kCZ+Ok1pzjUUnfssfQnIyMEFaWQtO5LKKdxfg0mDiL/J5P0V2vpOkji4+PIs66/lDNMraKBilsSjOOmvX2HlaZg99qC5Dx5MRtdpbRCA5XvqJjix/mS6FEb6i22yllzlY6282d3fn3z4x7bwRn6douunPt+67+V/Mfh4i6Kj+BuH8GPiPUhq07U1OqjGR/NTY92eayA2wPzFlzOj/ujV1tX6lWFoNGMqIQuCrcIfYhsaMkAHUAQyuJXAuUgQ8xkR594BPWwvNlEORSHE8JJA/2AaS7r5SCq38BnY2Hb+EIAAA=
',
  STICKER_DATA: process.env.STICKER_DATA || '🎯ᴘʜᴏᴇɴɪx-ᴍᴅ;ᴀʙʜɪꜱʜᴇᴋ ꜱᴜʀᴇꜱʜ🍀',
  ALIVE_DATA: process.env.ALIVE_DATA || '👋 ʜᴇʏ &sender, ɪ ᴍ *ᴘʜᴏᴇɴɪx-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ* ᴀʟɪᴠᴇ ɴᴏᴡ!\n\n📌 ᴛʏᴘᴇ *menu* ᴛᴏ ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ.\n\n*ᴘʟᴀᴛꜰᴏʀᴍ:* &platform\n*ʀᴜɴᴛɪᴍᴇ:* &runtime;https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg',
  AUDIO_DATA: process.env.AUDIO_DATA || 'Phoenix-MD;Abhishek Suresh;https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg',
  BOT_INFO: process.env.BOT_INFO || 'ᴘʜᴏᴇɴɪx-ᴍᴅ;ᴀʙʜɪꜱʜᴇᴋ ꜱᴜʀᴇꜱʜ;919074692450;https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg', 
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || 'private',
  SUDO: process.env.SUDO || '919074692450, 918157993101',
  START_MSG: toBool(process.env.START_MSG || 'true'),
  ERROR_MSG: toBool(process.env.ERROR_MSG || 'true'), 
  WELCOME_MSG: process.env.WELCOME_MSG || '👋 Hello *@user* Welcome To Our Group *@gname*\n*Total Members:* @count\n*Total Admins:* @admin\n*Group Description:*\n@gdesc @pp',
  GOODBYE_MSG: process.env.GOODBYE_MSG || '👋 GoodBye *@user* From *@gname*\n*Total Members:* @count @pp',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  RENDER_NAME: process.env.RENDER_NAME || '',
  RENDER_API: process.env.RENDER_API || '',
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || 'abhiLoki',
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || 'rdhmh9sja4bxep5wxf7e9y7q4my251ptcqmvrwc78698lbxp0uvm9gphsl0bpabn',
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || '',
  TIMEZONE: process.env.TIMEZONE || "Asia/Kolkata",
  LANG: process.env.LANG || 'EN',
  AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW || 'true'),
  AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY || 'false'),
  AUTO_STATUS_REPLY_MSG: process.env.AUTO_STATUS_REPLY_MSG || '_*Nice Status Bro 🍀*_',
  AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT || 'true'),
  AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || '🍀',
  AUTO_REACT: toBool(process.env.AUTO_REACT || 'false'),
  AUTO_READ_MSG: toBool(process.env.AUTO_READ_MSG || 'false'),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE || 'true'),
  AUTO_CALL_REJECT: toBool(process.env.AUTO_CALL_REJECT || 'false'),
  AUTO_CALL_REJECT_MSG: process.env.AUTO_CALL_REJECT_MSG || '*ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴄᴀʟʟ ʙʟᴏᴄᴋɪɴɢ*\n\nꜱᴏʀʀʏ ᴄᴀʟʟꜱ ᴀʀᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ\n\nᴘʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴀ ᴛᴇxᴛ ᴍᴇꜱꜱᴀɢᴇ/ᴠᴏɪᴄᴇ ᴍᴇꜱꜱᴀɢᴇ\n\n> ᴘʜᴏᴇɴɪx-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
//_______________#OTHER(⚠️ Warning Dont Edit Anything Here)____________________________________________________________________________________
  BASE_URL: 'https://abhi-api-wphp.onrender.com/', // Don't Change This
  BRANCH: 'main',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false })
};
