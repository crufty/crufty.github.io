'use strict';

import _ from 'lodash';
import 'whatwg-fetch';
import List from './List';

let url = 'https://dof4jdwm56.execute-api.us-west-2.amazonaws.com/prod/cruftyGov';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        let el = document.getElementById('container');
        let headline = _.shuffle(json)[0];
        let ul = new List([headline]);
        el.innerHTML = ul.html();
    });