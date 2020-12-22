const output = document.getElementById('output');
const input = document.getElementById('input');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit');
const answer = document.getElementById('answer');

submitBtn.addEventListener('click', () => {
    if (output.innerText == answer.innerText) {
        output.style.backgroundColor = "#effad3";
    
    }
    else {
        output.style.backgroundColor = "#ff8585";
    }
})

output.addEventListener("click", () => {
    input.focus();
    message.remove();
    input.addEventListener("keydown", keyDown);
    input.addEventListener("keypress", keyPress);
})


function keyDown(key) {
    if (key.keyCode == 8) {
        output.innerHTML = output.innerHTML.slice(0,-1);
    } 
}

function keyPress(key) {
    let prevLetter = output.innerHTML.charAt(output.innerHTML.length - 1);
    let num;
    switch(key.keyCode) {
        case 49:
            num = 1;
            if (!invalidInput(prevLetter)) {
                
                output.innerHTML = output.innerHTML.slice(0,-1);
                output.innerHTML += pinyinify(prevLetter, num);
                break;
            }
            output.innerHTML += num;
            break;
        case 50: 
            num = 2;
            if (!invalidInput(prevLetter)) {
                output.innerHTML = output.innerHTML.slice(0,-1);
                output.innerHTML += pinyinify(prevLetter, 2);
                break;
            }
            output.innerHTML += 2;
            break;
        case 51: 
            num = 3;
            if (!invalidInput(prevLetter)) {
                
                output.innerHTML = output.innerHTML.slice(0,-1);
                output.innerHTML += pinyinify(prevLetter, num);
                break;
            }
            output.innerHTML += num;
            break;
        case 52:
            num = 4;
            if (!invalidInput(prevLetter)) {
                
                output.innerHTML = output.innerHTML.slice(0,-1);
                output.innerHTML += pinyinify(prevLetter, num);
                break;
            }
            output.innerHTML += num;
            break;
        case 32:
            output.innerHTML += " ";
            break;
        default:
            if (key.keyCode >= 97 && key.keyCode <= 122) {
                const letter = keyLookup(key.keyCode);
                output.innerHTML += letter;
            }
    }
}

function pinyinify(letter, index) {
    const tones = {
        a: ["ā", "á", "ǎ", "à"],
        e: ["ē","é","ě","è"],
        i: ["ī","í","ǐ","ì"],
        o: ["ō", "ó", "ǒ", "ò"],
        u: ["ū", "ú", "ǔ", "ù"],
        v: ["ǖ", "ǘ", "ǚ", "ǜ"]
    }
    for (const [key, value] of Object.entries(tones)) {
        if(key == letter) return value[index - 1];
    }
}

function keyLookup(keyCode) {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", 
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u", 
        "v", "w", "x", "y", "z"
    ]
    let keyIndex = keyCode - 97;
    return alphabet[keyIndex];
}

function invalidInput(letter) {
    const vowels = "aeiouv";
    vArr = vowels.split("");
    for (let i = 0; i < vArr.length; i++) {
        if(vArr[i] == letter) {
            return false;
        }
    }
    return true;
}