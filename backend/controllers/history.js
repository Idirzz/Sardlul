const axios = require("axios");

exports.getaccidbyname = async (req, res, next) => {
    res = await axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + req.body.summ_name + "?api_key=" + process.env.RIOT_KEY)
    .then(result => {
        if (result.data && result.data.accountId)
            return res.status(200).send(result.data.accountId)
        else
            return res.status(202).send(result)
        }).catch(err =>{
            if (err)
                return res.status(400).send(err)
        })
}

exports.getLastMatchById = async (req, res, next) => {
    result = await axios.get("https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + req.body.summ_accid + "?endIndex=" + req.body.page * 5  + "&beginIndex=0&api_key=" + process.env.RIOT_KEY)
    .then(result => {
        if (result && result.data && result.data.matches)
            return res.status(200).send(result.data.matches)
        else
            return res.status(202).send(result)
        }).catch(err =>{
            return res.status(400).send(err)
        })
}

exports.getmatchdetails = async (req, res, next) => {
    result = await axios.get("https://euw1.api.riotgames.com/lol/match/v4/matches/" + req.body.matchid + "?api_key=" + process.env.RIOT_KEY)
    .then(result => {
        if (result && result.data)
            return res.status(200).send(result.data)
        else
            return res.status(202).send(result)
        }).catch(err =>{
            return res.status(400).send(err)
        })
}

exports.getaccdetails = async (req, res, next) => {
    result = await axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-account/" + req.body.summ_id + "?api_key=" + process.env.RIOT_KEY)
    .then(result => {
        if (result && result.data)
            return res.status(200).send(result.data)
        else
            return res.status(202).send(result)
        }).catch(err =>{
            return res.status(400).send(err)
        })
}

exports.getrankdetails = async (req, res, next) => {
    result = await axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + req.body.enc_summ_id + "?api_key=" + process.env.RIOT_KEY)
    .then(result => {
        if (result && result.data)
            return res.status(200).send(result.data)
        else
            return res.status(202).send(result)
        }).catch(err =>{
            return res.status(400).send(err)
        })
}
