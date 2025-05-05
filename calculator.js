
function append(value){
    document.getElementById('input').value += value;
}

function calculate(){
    try {
        const result = eval(document.getElementById('input').value)
        document.getElementById('input').value = result;
    } catch (error) {
        document.getElementById("input").value = "Error";
    }
}

function clearDisplay(){
    document.getElementById('input').value = '';
}