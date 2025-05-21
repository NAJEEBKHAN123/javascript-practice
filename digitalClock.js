
let newTime = document.getElementById('time')



setInterval(() =>{
    let time = new Date()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let sec = time.getSeconds()


    let currentTime = 
    hour + 
    ":" +
    minutes +
    ":" +
    sec

    document.getElementById('time').innerHTML = currentTime;
},1000)




