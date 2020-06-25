import React, { Component} from "react";
import styles from '../public/css/stats.module.css';
import Rankstats from "../components/rankstats.component";
const axios = require("axios");

export default class matches extends Component {
    constructor(props){
        super(props);

        this.state = {
            summ_id : this.props.summid,
            summ_name : this.props.summname,
            enc_summ_id : null,
            summ_level : null,
            summ_border : null,
            summ_icon : null,
            detail_status : false,
        }
    }

    componentDidMount() {
        axios.post("http://localhost:3001/history/getaccdetails", {summ_id : this.state.summ_id})
        .then(res => {
            let index = 0;
            for (let x = 25; x <= res.data.summonerLevel && index < 20; x += 25)
                index++;
            this.setState({detail_status : true, enc_summ_id : res.data.id, summ_icon : res.data.profileIconId, summ_level : res.data.summonerLevel, summ_border : index})
        }).catch(err =>{
            console.log(err);
        });
    }

    render() {
        if (this.state.detail_status)
            return (
                <div className={styles.stats}>
                    <p className={styles.username}>{this.state.summ_name}</p>
                    <div className={styles.img}>
                        <img alt="summoner_icon" className={styles.summimg} src={require("../docs/10.10.3208608/img/profileicon/" + this.state.summ_icon + ".png")}/>
                        <img alt="border" className={styles.borderimg} src={require("../docs/borderimg/" + this.state.summ_border + ".png")}/>
                        <label className={styles.summlevel}>{this.state.summ_level}</label>
                    </div>
                    <Rankstats encsummid={this.state.enc_summ_id} summid={this.props.summid} />
                </div>
            )
        else
            return (
                <div className={styles.stats}>
                    Loading..
                </div>
            )
    }
}