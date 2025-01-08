let currentAudio = null;
function showContent(mood) {
  const output = document.getElementById("output");

  let audioSource = "";

  switch (mood) {
    case "sad":
      audioSource = "https://files.catbox.moe/vh9wn4.mp3";
      output.innerHTML = `
                <p>Лера, помни, что я всегда рядом. Грусть временна, а товарищество — навсегда.</p>
                <img src="https://i.ytimg.com/vi/aGSKrC7dGcY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2YPAaiFdCSPy1qeEPRSt-l8oejQ" alt="Поддерживающее изображение">
            `;
      break;
    case "tired":
      audioSource = "https://files.catbox.moe/ng74m0.mp3";
      output.innerHTML = `
                <p>Жания тобой гордится. Ты так много делаешь, и это достойно восхищения.</p>
                <img src="https://c.files.bbci.co.uk/116F1/production/_107490417_burnoutmain.jpg" alt="Мотивирующее изображение">
            `;
      break;
    case "happy":
      audioSource = "https://files.catbox.moe/yu5811.mp3";
      output.innerHTML = `
                <p>Крутооо! Пусть этот момент длится вечно.</p>
                                <img src="https://files.catbox.moe/yus2h8.jpg" alt="Lera">
                <p>Такая девушка должна всегда улыбаться</p>
            `;
      break;
    case "angry":
      audioSource = "https://files.catbox.moe/id0sn1.mp3";
      output.innerHTML = `
                <p>Лерочка, злость — это способ организма показать, что ему нужно переключиться. Давай вместе справимся.</p>
                <img src="https://www.hibiny.ru/images/board/1038092/big/8e39774efbbb353d4cb83504efb539cc.jpg" alt="Смешная картинка">
                <p>Ты же не хочешь выглядеть вот так?</p>
            `;
      break;
    case "calm":
      audioSource = "https://files.catbox.moe/7twxjm.mp3";
      output.innerHTML = `
                <p>Такие моменты — как глоток свежего воздуха. Пусть твоё спокойствие наполняет тебя.</p>
                <img src="https://sun9-10.userapi.com/s/v1/ig2/P5fYiXyvUSo3JsUoVN1-HXYco0daRphUiOojDyVN33yyZHTUvDgg2mt7ZQdAvliS8GeQPz0cVhxk3zSbkQPceYTP.jpg?quality=96&as=32x35,48x52,72x78,108x117,160x173,240x259,360x389,480x519,540x583,634x685&from=bu&u=FI-gfHxNcTma9VWAS8z9z4YlmBRIxAPjauJQyXzHHsg&cs=634x685" alt="Выдра">
            `;
      break;
    case "excited":
      audioSource = "https://files.catbox.moe/ol345e.mp3";
      output.innerHTML = `
                <p>Взволнована вместе с тобой АААААА!</p>
                <img src="https://files.catbox.moe/kkbhxw.jpg" alt="me">
            `;
      break;
    default:
      output.innerHTML = `<p>Выбери настроение!</p>`;
  }
  if (audioSource) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(audioSource);
    currentAudio.play().catch((error) => {
      console.error("Ошибка воспроизведения аудио:", error);
    });
  }
}
