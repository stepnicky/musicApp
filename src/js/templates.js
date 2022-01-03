import { select } from './settings.js';

export const templates = {
    homeSong: Handlebars.compile(document.querySelector(select.templateOf.homeSong).innerHTML),
    searchSong: Handlebars.compile(document.querySelector(select.templateOf.searchSong).innerHTML),
    discoverSong: Handlebars.compile(document.querySelector(select.templateOf.discoverSong).innerHTML),
    search: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
    discover: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML)
};