
document.addEventListener('FROM_PAGE', function(e) {
  const { detail } = e
  console.log('detail', detail)
  const detailObj = JSON.parse(detail)
  const blobUrl = detailObj.blobUrl;
  console.log(blobUrl)
  // get blob text from blob url 
  fetch(blobUrl).then(res => res.text()).then(text => {
    console.log('text', text)
  })
  
})
