import pad from './pad.js';

export default function getgamedate(t) {
    var a = new Date(t)
      , n = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
      , r = a.getFullYear()
      , l = n[a.getMonth()]
      , c = a.getDate();
    return (c + " " + l + " " + r + " " + pad(a.getHours()) + ":" + pad(a.getMinutes()))
}