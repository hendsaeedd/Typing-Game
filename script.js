
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const startBtn = document.getElementById('start');

// all of our quotes
const quotes = [
    'Be yourself, everyone else is already taken.',
    'What one man can invent another can discover.',
    'There is nothing more deceptive than an obvious fact.',
    'I am a brain, Watson. The rest of me is a mere appendix.',
    'I never make exceptions. An exception disproves the rule.',
    'Nothing clears up a case so much as stating it to another person.',
    'I am not a member of any organized political party. I am a Democrat.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'Two things are infinite: the universe and human stupidity; and I am not sure about the universe',
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'I believe that the universe is fundamentally non-logical. It is not governed by reason, but by passion.',
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

//add event listener to start button
startBtn.addEventListener('click', () => {
    typedValueElement.style.display = 'block';
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    quoteElement.style='padding:20px';
    messageElement.innerText = '';
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    startTime = new Date().getTime();
});

// add event listener to input field
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = new Date().getTime() - startTime;
        const message = `✨CONGRATULATIONS!✨ You finished in ${Math.floor(elapsedTime / 1000)} seconds.`;
        messageElement.innerText = message;
        message.style='padding:20px';
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = '';
        wordIndex++;
    for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = '';
    } else {
        typedValueElement.className = 'error';
    }
});

//tailwind.config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
            clifford: '#da373d',
            }
        }
        }
    }
