export function about () {
  if(document.querySelector('.main-about')) {
    let playVideoBtn = document.querySelector('.main-about__video-plug-play');
    let videoPLug = document.querySelector('.main-about__video-plug');
    let video = document.querySelector('.main-about__video iframe');
    let videoId = video.getAttribute('src').slice(30);
    let videoDurationWrp = document.querySelector('.main-about__video-duration');
    let apiKey = 'AIzaSyASReS-jCAjxrKxznV4TgOZVX1D37yVvSA';
    let url = 'https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=' + apiKey + '&part=contentDetails';
    let videoDurationMins = document.querySelector('.main-about__video-duration-mins');
    let videoDurationSecs = document.querySelector('.main-about__video-duration-secs');

    let aboutText = document.querySelector('.main-about__text-wrapper');
    let aboutTextControls = document.querySelector('.main-about__text-controls');
    let aboutTextBtn = document.querySelector('.main-about__text-btn');

    if(videoPLug && playVideoBtn) {
      playVideoBtn.addEventListener('click', () => {
        videoPLug.classList.add('hidden');
        playVideoBtn.classList.add('hidden');
        videoDurationWrp.classList.add('hidden');
      })
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let duration = data.items[0].contentDetails.duration;
        let regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
        let match = regex.exec(duration);
        // let hours = (parseInt(match[1]) || 0);
        let minutes = (parseInt(match[2]) || 0);
        let seconds = (parseInt(match[3]) || 0);
        if(seconds <= 9) {
          seconds = `0` + seconds
        }
        videoDurationMins.innerHTML = minutes;
        videoDurationSecs.innerHTML = seconds;
      })
      .catch(error => console.error(error));

    if(aboutText && aboutTextControls) {
      if (aboutText.scrollHeight >= 231) {
        aboutTextControls.classList.add('visible')
      } else {
        aboutTextControls.classList.remove('visible')
      }
    }

    if(aboutTextBtn) {
      aboutTextBtn.addEventListener('click', () => {
        aboutText.classList.toggle('full-view');
        aboutTextBtn.classList.toggle('open');
        if(aboutTextBtn.classList.contains('open')) {
          aboutTextBtn.textContent = 'Скрыть'
        } else {
          aboutTextBtn.textContent = 'Подробнее'
        }
      })
    }

    if(aboutTextBtn) {
      if(window.innerWidth >= 1024) {
        aboutTextBtn.addEventListener('click', () => {
          document.querySelector('.main-about__video-wrapper').classList.toggle('full')
          document.querySelector('.main-about__text-wrapper').classList.toggle('full')
        })
      }
    }
  }
}
