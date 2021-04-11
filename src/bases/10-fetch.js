// Fetch API

const apiKey = 'KCTth99UavawpoE6lM4wwxXCe8BFP5ed';

const  request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then(response => response.json())
  .then(({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn)
