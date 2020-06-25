import React, { Component} from "react";
import Matches from "../components/matches.component";
import Stats from "../components/stats.component";
import styles from '../public/css/stats.module.css';
const axios = require("axios");
require('dotenv').config()

/*
// No Life Heca OTP
// rusty%20robot
// Jiraya
// Princesse Blue
*/

export default class index extends Component {
    constructor(props){
        super(props);

        this.state = {
            summ_status : null,
            summ_accid : null,
            summ_matches : null,
            summ_name : props.match.params.name,
            page : 1,
        }
    }

    componentDidMount() {
        axios.post("http://localhost:3001/history/getaccidbyname", {summ_name : this.state.summ_name})
        .then(res => {
            this.setState({summ_accid : res.data})
            axios.post("http://localhost:3001/history/getLastMatchById", {summ_accid : this.state.summ_accid, page : this.state.page})
            .then(res => {
                this.setState({summ_matches : res.data, summ_status : true})
            }).catch(err =>{
                this.setState({summ_status : false})
            });
        }).catch(err =>{
            this.setState({summ_status : false})
        });
    }

    onClickLoadMore = async () => {
        axios.post("http://localhost:3001/history/getLastMatchById", {summ_accid : this.state.summ_accid, page : this.state.page + 1})
        .then(res => {
            this.setState({summ_matches : res.data, page : this.state.page + 1})
        }).catch(err =>{
            this.setState({summ_status : false})
        });
    }
    
    render() {
        if (this.state.summ_status === false)
            return (
                <div>
                    <p>summoner not found</p>
                </div>
            )
        else if (this.state.summ_status === null)
            return (
                <div>
                    <p>loading..</p>
                </div>
            )
        else
            return (
                <div>
                    <div className={styles.maindiv}>
                        <Stats summname={this.state.summ_name} summid={this.state.summ_accid} />
                        <Matches onClickLoadMore={this.onClickLoadMore} summid={this.state.summ_accid} matches={this.state.summ_matches}  />
                    </div>
                </div>
            )
    }
}