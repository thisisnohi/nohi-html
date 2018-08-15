const common = require('./common.js');
const config = require('./config.json');

import React from 'react';
import {render} from 'react-dom';
import Greeter from './es6_react.js';

console.info(common.createTitle("who is this"));
document.getElementById('root').innerHTML = common.createTitle(config.greetText);
document.getElementById('root2').innerHTML= common.createTitle(config.greetText2);


render(<Greeter />, document.getElementById('root3'))