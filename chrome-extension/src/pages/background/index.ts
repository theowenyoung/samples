import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

console.log('background loaded,ad listen');

// chrome.runtime.onMessage.addListener((message) => {
//   console.log("message", message)
//
//   const blob = message.blobUrl
//   fetch(blob).then(res => res.text()).then(text => {
//     console.log('text', text)
//   })
// })
//

// const blob = new Blob(
//   [
//     `
// hello world
//   `,
//   ],
//   { type: 'application/javascript' },
// );
// const blobUrl = URL.createObjectURL(blob);
//
// chrome.runtime.sendMessage({
//   type: 'FROM_BACKGROUND',
//   blobUrl,
// })
