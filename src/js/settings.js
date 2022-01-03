export const select = {
    templateOf: {
        homeSong: '#template-home-song',
        searchSong: '#template-search-song',
        discoverSong: '#template-discover-song',
        search: '#template-search',
        discover: '#template-discover',
    }, 
    containerOf: {
        home: '.home-wrapper',
        search: '.search-wrapper',
        discover: '.discover-wrapper',
        pages: '#pages'
    },
    nav: {
        links: 'nav li a'
    },
    search: {
        form: '.search-form',
        input: '.search-input',
        counter: '.counter'
    }
};

export const classNames = {
    nav: {
        active: 'active'
    },
    pages: {
        active: 'active'
    }
};

export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
        songs: 'songs'
    }
};
