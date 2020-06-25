import champlist from '../../docs/10.10.3208608/data/fr_FR/champion.json';

export default function getchampname(id) {
    for (let champ in champlist.data)
        if (champlist.data[champ].key && parseInt(champlist.data[champ].key) === id)
            return (champlist.data[champ].id)
}