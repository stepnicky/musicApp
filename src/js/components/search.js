import { select } from '../settings.js';
import { templates } from '../templates.js';
import { utils } from '../utils.js';

class Search {
    constructor(element, data){
        const thisSearch = this;

        thisSearch.render(element);
        thisSearch.initActions(data);
        thisSearch.initPlayers();
    }
    render(element) {
        const thisSearch = this;
        thisSearch.dom = {};
        thisSearch.dom.container = element;
        const generatedHTML = templates.search();
        thisSearch.dom.container.innerHTML = generatedHTML;

        thisSearch.dom.form = element.querySelector(select.search.form);
        thisSearch.dom.input = element.querySelector(select.search.input);
        thisSearch.dom.counter = element.querySelector(select.search.counter);
    }
    initActions(data) {
        const thisSearch = this;

        
        
        thisSearch.dom.form.addEventListener('submit', function (){
            
            const generatedSongs = thisSearch.dom.container.querySelectorAll('article.song');
            for ( let song of generatedSongs){
                song.remove();
            }

            const inputValue = thisSearch.dom.input.value.toLowerCase();
            const searchedSongs = [];
            for (let song of data){
                const songTitle = song.title.toLowerCase();
                const songAuthor = song.author.toLowerCase();
                if ((songTitle.includes(inputValue) || songAuthor.includes(inputValue)) || (songTitle.includes(inputValue) && songAuthor.includes(inputValue))){
                    searchedSongs.push(song);
                }
            }
            console.log(searchedSongs.length);
            const ifPlural = searchedSongs.length>1 ? 's' : '';
            const counterAlert = 'We have found ' + searchedSongs.length + ' song' + ifPlural + '...';
            thisSearch.dom.counter.innerHTML = counterAlert;
            console.log('searchedSongs: ', searchedSongs);
            for(let searchedSong of searchedSongs){
                const generatedHTML = templates.song(searchedSong);
                const generatedSong = utils.createDOMFromHTML(generatedHTML);
                thisSearch.dom.container.appendChild(generatedSong);
            }
        });

    }
    initPlayers(){
    
        GreenAudioPlayer.init({
            selector: '.player', // inits Green Audio Player on each audio container that has class "player"
            stopOthersOnPlay: true
        });
    }
}

export default Search;