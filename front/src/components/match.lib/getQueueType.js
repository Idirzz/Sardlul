import queuetypes from '../../docs/queuetypes.json';

export default function getqueuetype(id){
    for (let nbr in queuetypes)
        if (queuetypes[nbr].queueId === id)
            return (queuetypes[nbr].description)
    return ("undefined queue type")
}