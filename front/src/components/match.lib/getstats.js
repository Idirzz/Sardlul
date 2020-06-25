export default function getstats(tab, playerid) {
    if (tab && playerid)
    {
        let ret = null;
        let partid = null;
        tab.participantIdentities.forEach(element => {
            if (element.player.currentAccountId === playerid)
                partid = element.participantId;
        });
        tab.participants.forEach(element => {
            if (element.participantId === partid)
                ret = element.stats.kills + " / " +  element.stats.deaths + " / " + element.stats.assists
        });
        return (ret)
    }
}