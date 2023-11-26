/**
 * DO NOT USE import someModule from '...';
 *
 * @issue-url https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/issues/160
 *
 * Chrome extensions don't support modules in content scripts.
 * If you want to use other modules in content scripts, you need to import them via these files.
 *
 */
import('@pages/content/ui');
import('@pages/content/injected');

console.log('content loaded');

chrome.runtime.onMessage.addListener((message) => {
  console.log('message2233', message);

  const blob = message.blobUrl;
  fetch(blob)
    .then((res) => res.text())
    .then((text) => {
      console.log('text', text);
    });
})

// create url blob
const blob = new Blob(
  [
    `
  window.addEventListener('message', (event) => {
    if (event.data.type === 'FROM_PAGE') {
      chrome.runtime.sendMessage(event.data);
    }
  });
  `,
  ],
  { type: 'application/javascript' },
);
const blobUrl = URL.createObjectURL(blob);

// setTimeout(() => {
//
//   chrome.runtime.sendMessage({
//     type: 'FROM_PAGE',
//     blobUrl,
//   });



// send doc message
// document.dispatchEvent(
//   new CustomEvent('FROM_PAGE', {
//     detail: JSON.stringify({
//       type: 'FROM_PAGE',
//       blobUrl,
//     }),
//   }),
// );
// },2000)
