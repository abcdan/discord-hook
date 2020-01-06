# Discord Hook
A Node.js Module to post to Discord Webhooks.

# Examples
Check the `example.js` in the `examples` folder

# Documentation
Put this somewhere on the top of your document
```js
const { Hook, Embed } = require('discord-hook')
```

## Hook Methods
To get started, you need to give up the webhook URL and append the methods using `.method(argument)` on the next lines.
### `webhook(url)`
Pass the url for the webhook, there are two ways to pass it.
<br>*Argument(s): string*
```js
new Hook()
  .webhook(webhook_url_here)
// or
new Hook(webhook_url_here)
```

### `addEmbed(embed)`
Simply add an embed to the post by using the `addElement` method, you pass an embed which you can make as well. More information later in this documenation.
<br>*Argument(s): embed*
```js
new Hook()
  .addEmbed(embed)
```

### `setAvatar(avatar)`
Overwrite the avatar set in the webhook settings on Discord, you need to pass an URL to it which directly leads to a file. You can use something like [file.coffee](https://file.coffee) for it.
<br>*Argument(s): string*
```js
new Hook()
  .setAvatar(url)
```

### `setContent(content)`
This is the message you want to display, you can leave it blank if you are gonna send an embed.
<br>*Argument(s): string*
```js
new Hook()
  .setAvatar(content)
```

### `setUsername(username)`
Overwrite the username set in the webhook settings on Discord, you need to pass a string.
<br>*Argument(s): string*
```js
new Hook()
  .setUsername(username)
```

### `setTts(boolean)`
Want to make the webhook speak to all it's users, you can do it.
<br>*Argument(s): boolean*
```js
new Hook()
  .setTts(boolean)
```

### `send()`
Done making the message? Run this method and it will be delivered to Discord.
<br>*Argument(s): none*
```js
new Hook()
  .send()
```

## Embed Methods
Want to send a fancy message? The Embed class got you covered. Start with the following and append the methods using `.method(argument)` on the next lines.
```js
const embed = new Embed()
```

### `setTitle(title)`
Set the title of the embed
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setTitle(title)
```

### `setDescription(description)`
Set the description of the embed
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setDescription(description)
```

### `setUrl(url)`
Set the url of the embed
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setUrl(url)
```

### `setTimestamp(timestamp)`
Set the timestamp for the footer of the timestamp, you don't need to pass an argument and it will pick the current time.
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setTimestamp(timestamp)
```

### `setColor(setColor)`
Set the color of the embed
<br>*Argument(s): integer*
```js
const embed = new Embed()
  .setColor(setColor)
```

### `setFooter(text, icon)`
Set the footer of the embed, the icon is optional if you are using this method.
<br>*Argument(s): string, string*
```js
const embed = new Embed()
  .setFooter(text, icon)
```

### `setImage(url)`
Set the image of the embed
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setImage(url)
```

### `setThumbnail(url)`
Set the thumbnail of the embed
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setThumbnail(url)
```

### `setVideo(url)`
Set the video of the embed
<br>*Argument(s): string*
```js
const embed = new Embed()
  .setVideo(url)
```

### `setAuthor(name, icon, url)`
Set the author of the embed, icon and url are optional.
<br>*Argument(s): string, string, string*
```js
const embed = new Embed()
  .setAuthor(name, icon, url)
```

### `addField(name, value, inline)`
Add a field to the embed, max is 25 fields.
<br>*Argument(s): string*
```js
const embed = new Embed()
  .addField(name, value, inline)
```

# License
Released under the `MIT` License
