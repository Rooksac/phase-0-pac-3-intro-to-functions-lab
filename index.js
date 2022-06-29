function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(shout(string))
}
function logWhisper(string) {
    console.log(whisper(string))
}
const invite = "Let's have dinner together!"
function sayHiToHeadphonedRoommate(invite) {
    if (invite === invite.toUpperCase())
    return "YES INDEED!"
    if (invite === invite.toLowerCase())
    return "I can't hear you!"
    if (invite === invite)
    return "I would love to!"
}