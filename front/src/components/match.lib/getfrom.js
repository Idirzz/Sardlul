function getdaysfrom(timestamp) {
    for (let days = 1; timestamp >= 86400000; days++)
    {
        timestamp -= 86400000;
        if (timestamp <= 86400000)
        {
            if (days === 1)
                return (days + " jour")
            else
                return (days + " jours")
        }
    }
}

export default function getfrom(timestamp) {
    let millis = Date.now() - timestamp;
    if (millis >= 86400000)
        return getdaysfrom(millis);
    else
    {
        if (millis >= 3600000)
            for (let hours = 1; millis >= 3600000; hours++)
            {
                millis -= 3600000;
                if (millis <= 3600000)
                    if (hours === 1)
                        return (hours + " heure")
                    else
                        return (hours + "  heures")
            }
        else
        {
            if (millis >= 60000)
                for (let minutes = 1; millis >= 60000; minutes++)
                {
                    millis -= 60000;
                    if (millis <= 60000)
                        if (minutes === 1)
                            return (minutes + " minute")
                        else
                            return (minutes + " minutes")
                }
            else
                if (millis >= 1000)
                    for (let sec = 1; millis >= 1000; sec++)
                    {
                        millis -= 1000;
                        if (millis <= 1000)
                            if (sec === 1)
                                return (sec + " seconde")
                            else
                                return (sec + "  secondes")
                    }
                else
                    return (" très peu")
        }
    }
}