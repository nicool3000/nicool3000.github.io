const loveNotes = [
    "Come on baby, light my fire!",
    "All you need is love!",
    "Take another little piece of my heart!",
    "God only knows what I’d be without you",
    "Say yes, don’t say no, 'cause I love you so!",
    "Excuse me while I kiss the sky!",
    "Don’t you want somebody to love?",
    "Love me two times, I'm goin' away!",
    "I wanna hold your hand!",
    "If I could save time in a bottle, the first thing that I'd like to do is to save every day till eternity passes away!",
    "You belong among the wildflowers!",
    "And in the end, the love you take is equal to the love you make.",
    "When I saw her standing there, I knew she was the one.",
    "Somebody to love, somebody to love, I need somebody to love.",
    "Love is all and love is everyone.",
    "All my loving, I will send to you.",
    "Love is old, love is new, love is all, love is you.",
    "Maybe, just maybe, you're gonna be the one that saves me.",
    "When I think of all the good times that you and I have shared."
];

const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#800080"];

let currentColor = "#FFC0CB";
let lastNote = null;

document.getElementById('heart').addEventListener('click', generateLoveNote);

function generateLoveNote() {
    let note = getRandomNote();
    document.getElementById('note').innerText = note;
    changeBackgroundColor();
}

function getRandomNote() {
    let note;
    do {
        note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    } while (note === lastNote);
    lastNote = note;
    return note;
}

function changeBackgroundColor() {
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    currentColor = newColor;
    document.body.style.backgroundColor = newColor;
}
