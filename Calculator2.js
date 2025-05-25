
function append(value){
    document.getElementById('input').value += value;
}



function calculate(){
    try {
        let result = eval(document.getElementById('input').value)
        document.getElementById('input').value = result;
    } catch (error) {
        document.getElementById('input').value = 'error'
    }
}

function clearDisplay(){
    document.getElementById('input').value = ''
}