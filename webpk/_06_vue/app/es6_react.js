import React, {Component} from 'react';
import config from './config.json';

import main from './css/a.css';  //导入

class Greeter extends Component{
    render() {
        return (<div className={main.root}> {config.greetText}</ div> ) ;
    }
}

export default Greeter