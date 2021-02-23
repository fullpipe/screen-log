# Screen log

Finally, you can see your console logs on mobile devices.

## Usage

Inject script at the top of <head> tag.

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/fullpipe/screen-log@1.0.6/dist/screen-log.js"></script>
    ...
</head>
```

or with js

```js
var sl = document.createElement('script');
sl.src = 'https://cdn.jsdelivr.net/gh/fullpipe/screen-log@1.0.6/dist/screen-log.js';
document.head.appendChild(sl);
```

### What can you do?

- `console.log(...)`, `console.warn(...)`, `console.error(...)`, `console.info(...)`, `console.debug(...)`
- `console.clear()`
- Also it logs js errors with `window.addEventListener('error', ...)`
- `bypass` mode, logs container becomes transparent for user interactions
- copy message by clicking


### Demo

![Demo](./showtime.gif)

## TODO

- Execute user input. `eval('alert("boo!")')`
- automate builds/releases, now you have to `npm run build:prod`
- make npm library?
- configuration
  - size
  - position
  - "switch" position
- initial config
  - window.screenShowOnStart = true
  - window.screenConfig = {...}
