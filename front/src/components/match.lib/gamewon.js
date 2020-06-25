export default function gamewon(tab, summid) {
    if (tab && summid)
    {
        let status = null;
        let partid = null;
        tab.participantIdentities.forEach(element => {
            if (element.player.currentAccountId === summid)
                partid = element.participantId;
        });
        tab.participants.forEach(element => {
            if (element.participantId === partid)
                if (element.stats.win) 
                    status = "Victory" 
                else
                    status = "Defeat";
        });
        return (status)
    }
}