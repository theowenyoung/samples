
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
  { type: 'application/javascript',crossOrigin:true },
);
const blobUrl = URL.createObjectURL(blob);

console.log(blobUrl)


const newUrl = `http://localhost:8001/blob-receive.html?blob=${encodeURIComponent(blobUrl)}`
console.log(newUrl)

const newUrl2 = `http://localhost:8002/blob-receive.html?blob=${encodeURIComponent(blobUrl)}`

console.log(newUrl2)
