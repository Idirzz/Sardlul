import React, { Component} from "react";
import styles from '../public/css/matches.module.css';

export default class loadmore extends Component {

    render() {
        return (
            <div onClick={this.props.onClickLoadMore} className={styles.loadmore}>
                    <p className={styles.loadmoretext}>Load More</p>
            </div>
        )
    }
}