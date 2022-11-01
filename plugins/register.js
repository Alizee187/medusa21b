import db from '../lib/database.js'

//const { createHash } = require('crypto')

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let user = db.data.users[m.sender]
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
  if (user.registered === true) throw `MeduS.A-bot® | *「 Rᴇɢɪsᴛʀᴏ 」*\n\nYa estás registrado!!\nQuieres volver a registrarse? escribe: ${usedPrefix}unreg SERIAL (El cual, todavia no esta implementado XD escribe !report (aqui el mensaje))`
  if (!Reg.test(text)) throw `MeduS.A-bot® | *「 Rᴇɢɪsᴛʀᴏ 」*\n\nERROR! El comando es: !reg nombre.edad Ejemplo: !reg syntax.23 (es solo un ejemplo si te registras asi = ban (tambien no pongas cualquier cosa, tiene que ser tu nombre y edad, o ban.))*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'MeduS.A-bot® | *「 ERROR 」*\n\nEl nombre no puede estar vacío (alfanumérico)'
  if (!age) throw 'MeduS.A-bot® | *「 ERROR 」*\n\nLA EDAD TIENE QUE SER REAL (Y no en blanco)'
  age = parseInt(age)
  if (age > 34) throw 'MeduS.A-bot® | *「 ERROR 」*\n\nEDAD NO AUTORIZADA. Si de verdad tienes esa edad, comunicalo en !report Si es un error, tienes 1 intento restante. '
  if (age < 11) throw 'MeduS.A-bot® | *「 ERROR 」*\n\nEDAD NO AUTORIZADA. Si de verdad tienes esa edad, comunicalo en !report Si es un error, reintenta en 2 hora(s) o seras baneado automaticamente.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
 // let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`MeduS.A-bot® | *「 Rᴇɢɪsᴛʀᴏ 」*
¡Registro completado! ✅

┏━━❉「 Rᴇɢɪsᴛʀᴏ 」❉━━┓
┣⊱ Nombre: ${name}
┣⊱ Edad: ${age} 
┣⊱ S/N: NO DISPONIBLE
┣
┣⊱ BOT EN FASE BETA
┣⊱ Poco a poco va teniendo mas cosas! 
┣
┣━━━━━━━━━━━
┣⊱Gracias por registrarte! espero que cuides al bot.
┣━━━━━━━━━━━
┣⊱!ayudaleaf Para ayuda de la economia
┣⊱!ayudafichas Ayuda para fichas del casino
┣⊱!tnc para terminos y condiciones de uso
┣⊱!menu para el menu del bot
┣⊱!aventura para ir de aventura! (RPG)
┣⊱!casino Para reportar al programador algun problema
━━━━━━━━━━━
`.trim())
}


/*conn.sendHydrated(m.chat, `MeduS.A-bot® | *「 Rᴇɢɪsᴛʀᴏ 」*
¡Registro completado! ✅

┏━━❉「 Rᴇɢɪsᴛʀᴏ 」❉━━┓
┣⊱ Nombre: ${name}
┣⊱ Edad: ${age} 
┣⊱ S/N: NO DISPONIBLE
┣
┣⊱ BOT EN FASE BETA
┣⊱ Poco a poco va teniendo mas cosas! 
┣
┣━━━━━━━━━━━
┣⊱Gracias por registrarte! espero que cuides al bot.
┣━━━━━━━━━━━
┣⊱!ayudaleaf Para ayuda de la economia
┣⊱!ayudafichas Ayuda para fichas del casino
┣⊱!tnc para terminos y condiciones de uso
┣⊱!menu para el menu del bot
┣⊱!aventura para ir de aventura! (RPG)
┣⊱!casino Para reportar al programador algun problema
━━━━━━━━━━━
 `, 'MeduSA-BOT v21', pp, 'https://chat.whatsapp.com/Isky4kDyn5u83F2B2SSLwv', 'Grupo principal del bot!', null, null, [
      ['Terminos y condiciones', '/tnc'],
      ['Menu del bot', '/menu'],
      ['ir al casino!', '/casino']
    ], m)
	*/

/*await conn.send3Button(m.chat, `MeduS.A-bot® | *Rᴇɢɪsᴛʀᴏ*\n\n
¡Registro completado! ✅

┏━━━━❉ Registro ❉━━━━━━┓
┣⊱ Nombre: ${name}
┣⊱ Edad: ${age} 
┣⊱ S/N: ${sn}
┣
┣⊱ RECUERDA QUE EL S/N ES IMPORTANTE! guardalo bien.
┣⊱ Por si necesitas registrarte otra vez.
┣
┣━━━━━━━━━━━━
┣⊱Gracias por registrarte! espero que disfrutes y cuides al bot.
┣━━━━━━━━━━━━
┣⊱!ayudaleaf Para ayuda de la economia
┣⊱!ayudafichas Ayuda para fichas del casino
┣⊱!tnc para terminos y condiciones de uso
┣⊱!menu para el menu 
┣⊱!aventura para ir de aventura! (RPG)
┣⊱!report Para reportar al programador algun problema
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 `, 'MeduS.A-bot® | Rᴇɢɪsᴛʀᴏ', 'Terminos y condiciones', '!tnc', 'ir al casino!', '!casino', 'Menu del bot!', '!menu', m)
} */

handler.help = ['reg', 'registrar'].map(v => v + ' <nombre>.<edad>')
handler.tags = ['exp']
handler.group = true

handler.command = /^(registrar|reg(ister)?)$/i

export default handler