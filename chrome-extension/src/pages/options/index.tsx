import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from '@pages/options/Options';
import '@pages/options/index.css';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/options');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }

  const iframe = document.querySelector('iframe');
  console.log("iframe", iframe)




const blob = new Blob(
  [
    `
hello world
  `,
  ],
  { type: 'application/javascript' },
);
const blobUrl = URL.createObjectURL(blob);
  console.log("blobUrl", blobUrl)
  // send message
  iframe?.contentWindow?.postMessage({ type: 'test',blobUrl:blobUrl,blob:blob }, '*');

const newUrl = `http://localhost:8001/blob-receive.html?blob=${encodeURIComponent(blobUrl)}`
console.log(newUrl)

const newUrl2 = `http://localhost:8002/blob-receive.html?blob=${encodeURIComponent(blobUrl)}`

console.log(newUrl2)

  // open window
// const opener =   window.open(newUrl, '_blank');
  // console.log("opener", opener)
  // send sendMessage
  // opener?.postMessage({ type: 'test',blobUrl:blobUrl }, '*');

  // chrome.runtime.sendMessage({ type: 'test',blobUrl:blobUrl })


  const root = createRoot(appContainer);
  root.render(<Options />);
}

init();
