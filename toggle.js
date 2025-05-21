let lightBtn = document.getElementById('lightBtn');
let darkBtn = document.getElementById('darkBtn')
let body = document.body;

// darkBtn.addEventListener('click', () =>{
//     body.style.backgroundColor = 'black'
//     body.style.color = 'white'
// })

// lightBtn.addEventListener('click', () =>{
//      body.style.backgroundColor = 'white'
//      body.style.color = 'black'
// })



function toggleSwitch(){
     document.body.classList.toggle('darkToggle')
     
     if(document.body.classList.contains('darkToggle')){
        localStorage.setItem('theme', 'dark')
     }else{
        localStorage.setItem('theme', 'dark')
     }

}


