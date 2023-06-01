function addText() {
    const textArea = document.getElementById('textArea');
    const contentArea = document.getElementById('contentArea');
    const text = textArea.value;
    contentArea.innerHTML += `<p>${text}</p>`;
    textArea.value = '';
  }
  
  function addImage() {
    const imageUrlInput = document.getElementById('imageUrlInput');
    const contentArea = document.getElementById('contentArea');
    const imageUrl = imageUrlInput.value;
    contentArea.innerHTML += `<img src="${imageUrl}" alt="Image">`;
    imageUrlInput.value = '';
  }
  
  function addVideo() {
    const videoUrlInput = document.getElementById('videoUrlInput');
    const contentArea = document.getElementById('contentArea');
    const videoUrl = videoUrlInput.value;
    contentArea.innerHTML += `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    videoUrlInput.value = '';
  }
  