import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const VIDEO_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(timePlayed, 1000));

function timePlayed(data) {
    const time = data.seconds;
    localStorage.setItem(VIDEO_TIME, JSON.stringify(time));
}

player
  .setCurrentTime(localStorage.getItem(VIDEO_TIME))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });