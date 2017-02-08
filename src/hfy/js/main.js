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
        console.log(json);
        let el = document.createElement('div');
        let ul = new List(json);
        el.innerHTML = ul.html();
        document.body.appendChild(el);
    });