const request = require('request')

/**
 * Webhook Part
 */

class Hook {
  constructor (url) {
    if (arguments.length > 1) throw new Error('You can only pass one argument')
    this.url = url
    this.tts = false
    this.embeds = []
  }

  webhook (url) {
    this.url = url
    return this
  }

  addEmbed (embed) {
    if (this.embeds.length === 25) throw new Error('Max embeds reached, 25 max.')
    this.embeds.push(embed.data())
    return this
  }

  setAvatar (avatar) {
    this.avatar = avatar
    return this
  }

  setContent (content) {
    if (!content.length > 2000) throw new Error('Content can only be up to 2000 characters')
    this.content = content
    return this
  }

  setUsername (name) {
    this.username = name
    return this
  }

  setTts () {
    this.tts = true
    return this
  }

  send () {
    if (!this.content && !this.embeds[0]) throw new Error('No content set, use setContent(content) or addEmbed(embed)')
    if (!this.url) throw new Error('No webhook URL set, use setHook(url)')

    const data = {
      content: this.content,
      username: this.username,
      avatar_url: this.avatar,
      tts: this.tts,
      embeds: this.embeds
    }

    const options = {
      method: 'POST',
      url: this.url,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    }
    request(options, (e, r) => {
      if (e) throw new Error('CONN ERROR! ' + e)
      return true
    })
  }
}

/**
 * Embed Support
 */

class Embed {
  constructor () {
    this.fields = []
    this.video = {}
    this.thumbnail = {}
    this.image = {}
    this.footer = {}
    this.author = {}
  }

  setTitle (title) {
    if (title.length > 256) throw new Error('Title too long, 256 max.')
    this.title = title
    return this
  }

  setDescription (description) {
    if (description.length > 2048) throw new Error('Title too long, 2048 max.')
    this.description = description
    return this
  }

  setUrl (url) {
    this.url = url
    return this
  }

  setTimestamp (timestamp) {
    if (!timestamp) this.timestamp = new Date().toISOString()
    this.timestamp = timestamp
    return this
  }

  setColor (color) {
    this.color = color
    return this
  }

  setFooter (text, icon) {
    if (text.length > 2048) throw new Error('Text too long, 2048 max.')
    this.footer.text = text
    if (icon) this.footer.icon = icon
    return this
  }

  setImage (url) {
    this.image.url = url
    return this
  }

  setThumbnail (url) {
    this.thumbnail.url = url
    return this
  }

  setVideo (url) {
    this.video.url = url
    return this
  }

  setAuthor (name, icon, url) {
    if (name.length > 2048) throw new Error('Text too long, 256 max.')
    this.author.name = name
    if (icon) this.author.icon = icon
    if (url) this.author.url = url
    return this
  }

  addField (name, value, inline) {
    if (this.fields.length > 25) throw new Error('Max fields reached, 25 max.')
    if (!name) throw new Error('No name defined')
    if (!value) throw new Error('No value defined')
    if (inline && typeof inline !== 'boolean') throw new Error('Inline can only be a boolean')
    if (name.length > 256) throw new Error('Name too long, 256 max.')
    if (value.length > 256) throw new Error('Value too long, 1024 max.')
    const data = {
      name,
      value,
      inline
    }
    this.fields.push(data)
    return this
  }

  data () {
    return {
      title: this.title,
      value: 'test',
      type: 'rich',
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: this.footer,
      image: this.image,
      thumbnail: this.thumbnail,
      video: this.video,
      author: this.author,
      fields: this.fields
    }
  }
}

module.exports = {
  Hook, Embed
}
