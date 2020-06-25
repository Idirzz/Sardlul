import React, { Component} from "react";
import styles from '../public/css/matches.module.css';

export default class Item extends Component {
    render() {
        return (
            <div>
                <img alt="item" className={styles.item} src={require("../docs/10.10.3208608/img/item/" + this.props.item + ".png")}/>
            </div>
        )
    }
}