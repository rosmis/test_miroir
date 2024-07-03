const prompt = require("prompt");

const date = new Date();
const hour = date.getHours();

const testIfPromptPalindrome = (str) => {
    return str === str.split("").reverse().join("");
};

if (hour >= 6 && hour < 18) {
    console.log("Bonjour Sir Rosmis");
} else {
    console.log("Bonsoir Sir Rosmis");
}

const askPrompt = () => {
    prompt.get(["data"], function (err, result) {
        if (result.data === testIfPromptPalindrome(result.data)) {
            console.log("Bien dit !");
        }

        console.log(result.data);
        askPrompt();
    });
};

prompt.start();
askPrompt();

module.exports = askPrompt;
