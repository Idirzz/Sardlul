import React, { Component} from "react";
import styles from '../public/css/stats.module.css';
import Soloqueue from "../components/soloqueue.component";
import Flexqueue from "../components/flexqueue.component";
const axios = require("axios");

export default class matches extends Component {
    constructor(props){
        super(props);

        this.state = {
            summ_id : this.props.summid,
            enc_summ_id : this.props.encsummid,
            soloqueue_data : null,
            flexqueue_data : null,
            ranked_stats : false,
        }
    }

    componentDidMount = async () => {
        const result = await axios.post("http://localhost:3001/history/getrankdetails", {enc_summ_id : this.state.enc_summ_id})
        if (result.data.length)
            {
                for (let e in result.data){
                    if (result.data[e].queueType === "RANKED_SOLO_5x5")
                        this.setState({soloqueue_data : result.data[e], ranked_stats : true})
                    if (result.data[e].queueType === "RANKED_FLEX_SR")
                        this.setState({flexqueue_data : result.data[e], ranked_stats : true})
                }
            }
            else
                this.setState({ranked_stats : null})
    }

    render() {
        if (this.state.ranked_stats)
            return (
                <div className={styles.rankedstats}>
                    <Soloqueue data={this.state.soloqueue_data} />
                    <Flexqueue data={this.state.flexqueue_data} />
                </div>
            )
        else if (this.state.ranked_stats === null)
            return ("")
        else
            return (
                <div className={styles.rankedstats}>
                    Loading..
                </div>
            )
    }
}