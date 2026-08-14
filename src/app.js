import angular from 'angular';
import nganimate from 'angular-animate';
import ngariafrom 'angular-aria';
import ngmaterial from 'angular-material';

import './style.css';

import routing form 'app.config.js';

angular
    .module('app', [
        nganimate,
        ngaria,
        ngmaterial
    ])
    .config(routing)
    .run(function() {
        console.log("Run app!");
    });
