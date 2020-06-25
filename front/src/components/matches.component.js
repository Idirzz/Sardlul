import React, { Component} from "react";
import Match from "../components/match.component";
import styles from '../public/css/matches.module.css';
import Loadmore from "./loadmore.component";

export default class matches extends Component {
    constructor(props){
        super(props);

        this.state = {
            matches : this.props.matches,
        }
    }

    matchHistory() {
        if (this.props.matches && this.props.matches.length)
            return this.props.matches.map(match => {
                return <Match match={match} key={match.gameId} summid={this.props.summid}/>
            });
        else
            return ;
    }

    render() {
        return (
            <div className={styles.history}>
                {this.matchHistory()}
                <Loadmore onClickLoadMore={this.props.onClickLoadMore}/>
            </div>
        )
    }
}