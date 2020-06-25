export default function gameitem(tab, playerid) {
    if (tab && playerid)
    {
        let ret = [];
        let partid = null;
        tab.participantIdentities.forEach(element => {
            if (element.player.currentAccountId === playerid)
                partid = element.participantId;
        });
        tab.participants.forEach(element => {
            if (element.participantId === partid)
            {
                if (element.stats.item0 !== 0)
                    ret.push(element.stats.item0)
                if (element.stats.item1 !== 0)
                    ret.push(element.stats.item1)
                if (element.stats.item2 !== 0)
                    ret.push(element.stats.item2)
                if (element.stats.item3 !== 0)
                    ret.push(element.stats.item3)
                if (element.stats.item4 !== 0)
                    ret.push(element.stats.item4)
                if (element.stats.item5 !== 0)
                    ret.push(element.stats.item5)
            }
        });
        return (ret)
    }
    else
        return (null)
}