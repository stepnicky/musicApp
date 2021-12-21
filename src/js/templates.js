import { select } from './settings.js';

export const templates = {
    song: Handlebars.compile(document.querySelector(select.templateOf.song).innerHTML),
    search: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
    discover: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML)
};