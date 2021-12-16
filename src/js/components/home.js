
import { templates } from '../templates.js';
import { utils } from '../utils.js';

class Home {
    constructor(element, data){
        const thisHome = this;
        thisHome.render(element, data);
        thisHome.initPlayers();
        
        
        console.log('data', data);
    }
    render(element, data){
        const thisHome = this;

        thisHome.dom = {};
        thisHome.dom.wrapper = element;

        const generatedHTML = templates.homePage(data);
        thisHome.element = utils.createDOMFromHTML(generatedHTML);
        console.log('thisHome.element: ', thisHome.element);
        

        thisHome.dom.wrapper.appendChild(thisHome.element);
    }
    initPlayers(){
        const thisApp = this;

        

        // thisApp.audioPlayer = new GreenAudioPlayer('.player', '.player-1', 'player-2', 'player-3', 'player-4');

        GreenAudioPlayer.init({
            selector: '.player', // inits Green Audio Player on each audio container that has class "player"
            stopOthersOnPlay: true
        });
    }
}

export default Home;