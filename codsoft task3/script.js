let output = document.getElementById("output");

function appendToScreen(value) {
    if (output.innerText === "0") {
        output.innerText = value;
    } else {
        output.innerText += value;
    }
}

function clearScreen() {
    output.innerText = "0";
}

function deleteLastCharacter() {
    if (output.innerText.length === 1) {
        output.innerText = "0";
    } else {
        output.innerText = output.innerText.slice(0, -1);
    }
}

function evaluateExpression() {
    try {
        output.innerText = eval(output.innerText);
    } catch {
        output.innerText = "Error";
    }
}