import React, { Component} from "react";
/*import styles from '../public/css/matches.module.css';
import getfrom from './match.lib/getfrom'
import getqueuetype from './match.lib/getQueueType'
import getchampname from './match.lib/getChampName.js'
import gamewon from './match.lib/gamewon.js'
const axios = require("axios");*/

export default class Match extends Component {
    constructor(props){
        super(props)

        this.state = {
            matchid : this.props.gameId,
            status : false
        }
    }

    onClickitem = (e) => {
        console.log(this.state)
    }

    render() {
        return (
            <div onClick={this.onClickitem}>
                inc
            </div>
        )
    }
}