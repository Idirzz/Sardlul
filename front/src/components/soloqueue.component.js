import React, { Component} from "react";
import styles from '../public/css/stats.module.css';

export default class soloqueue extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data,
        }
    }

    render() {
        if (this.props.data)
            return (
                <div className={styles.rankedstatschild}>
                    <p className={styles.rankedstatqueue}>Soloqueue</p>
                    <p>{this.props.data.tier} {this.props.data.rank} {this.props.data.leaguePoints} lp</p>
                    <p>{this.props.data.wins} Wins {this.props.data.losses} Losses</p>
                </div>
            )
        else
            return ("")
    }
}