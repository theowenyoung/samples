

console.log('listen')
window.addEventListener('message', (event) => {
  console.log(event)
  const data = event.data;

  const blobUrl = data.blobUrl;
  console.log(blobUrl)
  console.log(data.blob)

  // get blob text from blob url 
  // fetch(blobUrl).then(res => res.text()).then(text => {
  //   console.log('text', text)
  //   document.body.innerText = text
  // })
});




