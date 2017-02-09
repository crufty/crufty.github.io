'use strict';

import _ from 'lodash';
import 'whatwg-fetch';
import List from './List';

let el = document.getElementById('container');
let url = 'https://dof4jdwm56.execute-api.us-west-2.amazonaws.com/prod/cruftyGov';
let headline_hash = _.split(window.location.href, "/#headline/")[1];

export const setHeadlineList = (headline) => {
    let ul = new List([headline]);
    el.innerHTML = ul.html();
    // strip any previous hash-nav and add the current headline
    let url = _.replace(`${_.replace(window.location.href, /#headline.*$/, '')}/#headline/${headline.hash}`, "//#", "/#");
    window.history.pushState({}, headline.title, url);
    _.defer(setSocialLinks, {
        headline,
        url
    });
}

export const setSocialLinks = (args) => {
    if (_.isObject(addthis)) {
        addthis.update('share', 'url', args.url);
        addthis.update('share', 'title', args.headline.title);
    }
}

if (localStorage.getItem(headline_hash)) {
    setHeadlineList(JSON.parse(localStorage.getItem(headline_hash)));
} else {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let headline = _.shuffle(json)[0];
            window.localStorage.setItem(headline.hash, JSON.stringify(headline));
            setHeadlineList(headline);
        });
}