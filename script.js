const playlist = [
    "musicas/500 graus de vuko vuko (Padre Antonio Putaria).mp3",
    "musicas/Adame DJ - Summer BaileHits Vol. 1 - 02 Titanium (Remix).mp3",
    "musicas/Adame DJ - Summer BaileHits Vol. 1 - 05 Wonderful (Remix).mp3",
  ];
  
  let current = 0;
  const radio = new Audio(playlist[current]);
  radio.loop = false;
  radio.play();
  
  radio.addEventListener("ended", () => {
    current = (current + 1) % playlist.length;
    radio.src = playlist[current];
    radio.play();
  });
  