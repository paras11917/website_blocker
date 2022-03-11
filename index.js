let blockUrls = [
    {
        link:"xvideos.com",
    },
    {
        link:"pornhub.org",
    },
    {
        link:"xnxx.com",
    },
    {
        link:"xhamster.com"
    },
    {
        link:"porn.com"
    },
    {
       link:"nude" 
    }
]

blockUrls.forEach((element) => {
    if(window.location.origin.includes(element.link)) {
      document.getElementsByTagName("body")[0].innerHTML = '<div><img src="https://www.kindpng.com/picc/m/775-7752343_doge-doge-meme-2020-hd-png-download.png" style="margin: 0px auto; height: 100vh; display: flex;"></div>';
    }
  })