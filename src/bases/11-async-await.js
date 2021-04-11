// async await

const getImage = async () => {
  try {
    const apiKey = 'KCTth99UavawpoE6lM4wwxXCe8BFP5ed';
    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await response.json();
    const { url } = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error)
  }
}

getImage()
