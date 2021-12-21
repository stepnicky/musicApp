import { templates } from '../templates.js';
import { utils } from '../utils.js';
import { select } from '../settings.js';

class Discover{
    constructor(data){
        const thisDiscover = this;

        thisDiscover.randomize(data);
    }
    randomize(data){
        const thisDiscover = this;

        const randomNumber = Math.floor(Math.random() * data.length + 1);
        console.log(randomNumber);
        
        for(let song of data){
            if(randomNumber === song.id){
                thisDiscover.render(song);
            }
        }

    }
    render(song){
        const thisDiscover = this;

        const generatedHTML = templates.discover();
        

        thisDiscover.dom = {};
        thisDiscover.dom.wrapper = document.querySelector(select.containerOf.discover);

        thisDiscover.dom.wrapper.innerHTML = generatedHTML;

        const songHTML = templates.song(song);
        const generatedSong = utils.createDOMFromHTML(songHTML);
        thisDiscover.dom.wrapper.appendChild(generatedSong);

    }
}

export default Discover;