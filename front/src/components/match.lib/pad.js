export default function pad(e) {
    var t = parseInt(e);
    return 10 > t ? "0" + t : t
}