import React, { Component} from "react";
import styles from '../public/css/matches.module.css';
import Item from "../components/item.component";

export default class Itemlist extends Component {
    listitem() {
        let index = 0;
        if (this.props.itemlist && this.props.itemlist.length)
            return this.props.itemlist.map(item => {
                return <Item item={item} key={index++}/>
            });
        else
            return ;
    }

    render() {
        if (this.props.itemlist)
            return (
                <div className={styles.itemlist}>
                    {this.listitem()}
                </div>
            )
        else
            return("")
    }
}