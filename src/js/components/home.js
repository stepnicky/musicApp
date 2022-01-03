
import { templates } from '../templates.js';
import { utils } from '../utils.js';

class Home {
    constructor(element, data){
        const thisHome = this;
        thisHome.renderSongs(element, data);
        thisHome.initPlayers(data);
        
        
        console.log('data', data);
    }
    renderSongs(element, data){
        const thisHome = this;

        thisHome.dom = {};
        thisHome.dom.wrapper = element;

        const generatedHTML = templates.homeSong(data);
        thisHome.element = utils.createDOMFromHTML(generatedHTML);
        console.log('thisHome.element: ', thisHome.element);
        

        thisHome.dom.wrapper.appendChild(thisHome.element);
    }
    initPlayers(data){
        const thisHome = this;
        // eslint-disable-next-line
        thisHome.player = new GreenAudioPlayer('.player-' + data.id);
        // thisHome.player.init({
        //     selector: '.player-' + data.id, // inits Green Audio Player on each audio container that has class "player"
        //     stopOthersOnPlay: true
        // });
    }
}

export default Home;