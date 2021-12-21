
import { templates } from '../templates.js';
import { utils } from '../utils.js';

class Home {
    constructor(element, data){
        const thisHome = this;
        thisHome.renderSongs(element, data);
        thisHome.initPlayers();
        
        
        console.log('data', data);
    }
    renderSongs(element, data){
        const thisHome = this;

        thisHome.dom = {};
        thisHome.dom.wrapper = element;

        const generatedHTML = templates.song(data);
        thisHome.element = utils.createDOMFromHTML(generatedHTML);
        console.log('thisHome.element: ', thisHome.element);
        

        thisHome.dom.wrapper.appendChild(thisHome.element);
    }
    initPlayers(){
       
        // thisHome.audioPlayer = new GreenAudioPlayer('.player');

        GreenAudioPlayer.init({
            selector: '.player', // inits Green Audio Player on each audio container that has class "player"
            stopOthersOnPlay: true
        });
    }
}

export default Home;