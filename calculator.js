function clearScreen() {
    document.getElementById("calculator-screen").value = "";
}

function appendToScreen(value) {
    document.getElementById("calculator-screen").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("calculator-screen").value);
        document.getElementById("calculator-screen").value = result;
    } catch (error) {
        document.getElementById("calculator-screen").value = "Error";
    }
}

function backspace() {
    let screen = document.getElementById("calculator-screen").value;
    document.getElementById("calculator-screen").value = screen.substring(0, screen.length - 1);
}
