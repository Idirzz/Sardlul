//import Matchdetails from "./matchdetails.component";
import Itemlist from "./itemlist.component";
import React, { Component} from "react";
import styles from '../public/css/matches.module.css';
import getgamedate from './match.lib/getgamedate'
import getfrom from './match.lib/getfrom'
import gameitem from './match.lib/gameitem'
import getstats from './match.lib/getstats'
import gamewon from './match.lib/gamewon'
import getqueuetype from './match.lib/getQueueType'
import getchampname from './match.lib/getChampName.js'
const axios = require("axios");

export default class Match extends Component {
    constructor(props){
        super(props)

        this.state = {
            gameitems : null,
            matchdetails : null,
            matchid : this.props.match.gameId,
            style : {opacity : 0,
                    position : "absolute",        
            }
        }
    }


    componentDidMount() {
        axios.post("http://localhost:3001/history/getmatchdetails", {matchid : this.state.matchid})
        .then(res => {
            if (res && res.data)
            {
                this.setState({matchdetails : res.data})
                let gameitems = gameitem(this.state.matchdetails, this.props.summid)
                this.setState({gameitems : gameitems})
            }
            }).catch(err =>{
                console.log(err)
            })
    }

    listitems = (e) =>{
        if (!this.state.gameitems)
            return ("")
        else
            return (<Itemlist itemlist={this.state.gameitems}/>)
    }

    /*onMatchClick = (e) =>{
        console.log(this.state)
        this.setState({style : {opacity : 1, position : "static"}})
    }*/

    render() {
        return (
            <div className={styles.matchdiv}>
                <div /*onClick={this.onMatchClick}*/ className={styles.match}>
                    <img alt="champion" className={styles.historychampimg} src={require("../docs/10.10.3208608/img/champion/" + getchampname(this.props.match.champion) + ".png")}/>
                    <div className={styles.matchinfos}>
                        <div>{gamewon(this.state.matchdetails, this.props.summid)}</div>
                        <div>{getstats(this.state.matchdetails, this.props.summid)}</div>
                        <div>{getqueuetype(this.props.match.queue)}</div>
                        <div className={styles.matchago}>
                            <div className={styles.matchdate}>
                                {getgamedate(this.props.match.timestamp)}
                            </div>il y a {getfrom(this.props.match.timestamp)}
                        </div>
                    </div>
                    {this.listitems()}
                </div>
                {/*<div style={{opacity : this.state.style.opacity, position : this.state.style.position}} className={styles.match2}>
                    <Matchdetails gameId={this.state.matchid}/>
                </div>*/}
            </div>
        )
    }
}