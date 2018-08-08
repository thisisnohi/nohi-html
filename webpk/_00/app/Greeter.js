import React, {Component} from 'react'
var config = require('./config.json');
import styles from './Greeter.css';//导入

class Greeter extends Component{
    render() {
        return (
            <div lassName={styles.root}> aa:  //使用cssModule添加类名的方法
            {config.greetText}
            </div>
        );
    }
}

export default Greeter