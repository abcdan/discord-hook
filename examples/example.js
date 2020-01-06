const { Hook, Embed } = require('../')

const embed = new Embed()
  .setTitle('Discord-Hook')
  .setDescription('It\'s an awesome project!')
  .setColor(123123)
  .setFooter('It might contain some bugs', 'https://file.coffee/KSOypXAeF.png')
  .setImage('https://file.coffee/KSOypXAeF.png')
  .setThumbnail('https://file.coffee/KSOypXAeF.png')
  .setAuthor('Hooky!', 'https://file.coffee/KSOypXAeF.png', 'https://lngzl.nl')
  .addField('This is cool!', 'Even cooler', true)

new Hook()
  .webhook('discord_webhook_url_here')
  .setAvatar('https://file.coffee/KSOypXAeF.png')
  .setContent('This is the coolest program')
  .setUsername('Discord-Hook')
  .addEmbed(embed)
  .setTts(true)
  .send()