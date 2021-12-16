export const select = {
    templateOf: {
        homePage: '#template-home',
    }, 
    containerOf: {
        home: '.home-wrapper',
        pages: '#pages'
    },
    nav: {
        links: 'nav li a'
    },
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
