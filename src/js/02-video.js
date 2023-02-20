import Player from '@vimeo/player';
import { load, save } from './storage';
import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = Number(load("videoplayer-current-time"));
const setCurrentTime = () => {
    player.getCurrentTime().then(function (seconds) {
        save("videoplayer-current-time", seconds)
    })
        .catch(function (error) {
            console.log(error)
    })
};

player.on('timeupdate', throttle((setCurrentTime), 1000));

player.setCurrentTime(currentTime); 
       